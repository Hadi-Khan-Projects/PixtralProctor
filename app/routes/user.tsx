import { Flex, Paper } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { getWebcamStream, getScreenStream, captureFrame, uploadCapturedData } from "./utils";

export default function Proctoring() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const screenRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [webcamStream, setWebcamStream] = useState<MediaStream | null>(null);
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    async function initStreams() {
      const webcam = await getWebcamStream(videoRef.current);
      const screen = await getScreenStream(screenRef.current);
      setWebcamStream(webcam);
      setScreenStream(screen);
    }

    initStreams();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      captureFrame(videoRef.current, screenRef.current, canvasRef.current, (blob) => {
        uploadCapturedData(blob);
      });
    }, 250);

    return () => clearInterval(interval);
  }, [webcamStream, screenStream]);

  return (
    
    <Flex style={{ height: '100vh' }} p="md">
      <Paper bg="redLight" radius="10px" m="sm" p="md">
        <Flex direction="column" style={{ flex: 2, minHeight: 0 }}>
          <video ref={videoRef} autoPlay width={400} height={300}></video>
          <video ref={screenRef} autoPlay width={400} height={300}></video>
        </Flex>
      </Paper>
    </Flex>
  );
}


export async function getWebcamStream(videoElement: HTMLVideoElement | null): Promise<MediaStream | null> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoElement) {
      videoElement.srcObject = stream;
    }
    return stream;
  } catch (error) {
    console.error("Error accessing webcam:", error);
    return null;
  }
}

export async function getScreenStream(screenElement: HTMLVideoElement | null): Promise<MediaStream | null> {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    if (screenElement) {
      screenElement.srcObject = stream;
    }
    return stream;
  } catch (error) {
    console.error("Error accessing screen:", error);
    return null;
  }
}

export function captureFrame(
  videoElement: HTMLVideoElement | null,
  screenElement: HTMLVideoElement | null,
  canvasElement: HTMLCanvasElement | null,
  callback: (blob: Blob) => void
): void {
  if (videoElement && screenElement && canvasElement) {
    const canvas = canvasElement;
    const context = canvas.getContext("2d");

    if (context) {
      // Draw webcam feed
      context.drawImage(videoElement, 0, 0, canvas.width / 2, canvas.height);

      // Draw screen feed
      context.drawImage(screenElement, canvas.width / 2, 0, canvas.width / 2, canvas.height);

      // Convert canvas to Blob and call callback
      canvas.toBlob((blob) => {
        if (blob) {
          callback(blob);
        }
      }, "image/png");
    }
  }
}

export async function uploadCapturedData(blob: Blob) {
  try {
    const formData = new FormData();
    formData.append("image", blob, "capture.png");

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData, // Sending the blob as multipart/form-data
    });

    if (!response.ok) {
      console.error("Failed to upload captured data.");
    }
  } catch (error) {
    console.error("Error uploading captured data:", error);
  }
}

