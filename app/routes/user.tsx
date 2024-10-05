import React, { useRef, useEffect, useState } from "react";
import { useLoaderData } from '@remix-run/react';
import { io, Socket } from 'socket.io-client';

export default function ScreenRecord() {
  const serverUrl = "http://localhost:4000";
  const screenRecorder = useScreenRecorder(serverUrl);
  const webcamRecorder = useWebcamRecorder(serverUrl);

  return (
    <div>
      <h1>Screen Recording Page</h1>
      <video ref={screenRecorder.videoRef} width="640" height="360" controls autoPlay />
      <div>
        {!screenRecorder.isRecording ? (
          <button onClick={screenRecorder.startRecording}>Start Recording</button>
        ) : (
          <button onClick={screenRecorder.stopRecording}>Stop Recording</button>
        )}
      </div>
      <video ref={webcamRecorder.videoRef} width="640" height="360" controls autoPlay />
      <div>
        {!webcamRecorder.isRecording ? (
          <button onClick={webcamRecorder.startRecording}>Start Recording</button>
        ) : (
          <button onClick={webcamRecorder.stopRecording}>Stop Recording</button>
        )}
      </div>
    </div>
  );
}


// Screen recording
export const useScreenRecorder = (serverUrl: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [mediaSocket, setMediaSocket] = useState<Socket | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
      setMediaStream(stream);
      setMediaRecorder(recorder);

      let socket = io(serverUrl);
      console.log("screen recording: connected to socket")

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          socket.emit('video-data', event.data);
        }
      };

      recorder.start(1000); // Stream data every second
      setIsRecording(true);
      setMediaSocket(socket);
    } catch (err) {
      console.error("Error starting screen recording:", err);
    }
  };

  const stopRecording = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
    }
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
    if (mediaSocket) {
      mediaSocket.disconnect();
      console.log("screen recording: disconnected from socket");
    }
    setIsRecording(false);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
      if (mediaRecorder) {
        mediaRecorder.stop();
      }
      if (mediaSocket) {
        mediaSocket.disconnect();
      }
    };
  }, [mediaStream, mediaRecorder]);

  return { videoRef, isRecording, startRecording, stopRecording };
};


// Webcam recording
export const useWebcamRecorder = (serverUrl: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [mediaSocket, setMediaSocket] = useState<Socket | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
      setMediaStream(stream);
      setMediaRecorder(recorder);

      let socket = io(serverUrl);
      console.log("webcam recording: connected to socket")

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          socket.emit('video-data', event.data);
        }
      };

      recorder.start(1000); // Stream data every second
      setIsRecording(true);
      setMediaSocket(socket);
    } catch (err) {
      console.error("Error starting screen recording:", err);
    }
  };

  const stopRecording = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
    }
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
    if (mediaSocket) {
      mediaSocket.disconnect();
    }
    setIsRecording(false);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
      if (mediaRecorder) {
        mediaRecorder.stop();
      }
      if (mediaSocket) {
        mediaSocket.disconnect();
      }
    };
  }, [mediaStream, mediaRecorder]);

  return { videoRef, isRecording, startRecording, stopRecording };
};

