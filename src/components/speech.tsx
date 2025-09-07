"use client"

import React, { useState, useRef, useEffect } from "react";


interface Iprops {
  data: { number: number; question: string } | undefined | null;
  isloading: boolean;
  countdown: number;
  recordstartedtime: number;
  setCountdown: (countdown: number|any) => void;
  setRecordstartedTime: (time: number|any) => void;
  giventime: number;
  practicetime: number;
  totalquestion: number;
  qn: number;
}

const Speech = ({
  data,
  isloading,
  countdown,
  recordstartedtime,
  setCountdown,
  setRecordstartedTime,
  giventime,
  practicetime,
  totalquestion,
  qn,
}: Iprops) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunks.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunks.current, { type: "audio/webm" });
        setAudioURL(URL.createObjectURL(audioBlob));
        chunks.current = [];
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setIsRecording(true);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to access microphone. Check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  // Countdown timer before recordijnggfhvdfvijopdfvjiodf
  useEffect(() => {
    if (isloading) return;
    if (countdown <= 0) {
      startRecording();
      return;
    }
    const timer = setInterval(() => {
      setCountdown((prev:number) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, isloading]);

  // Recording timer
  useEffect(() => {
    if (!isRecording) return;
    const timer = setInterval(() => {
      setRecordstartedTime((prev:number) => prev + 1);
    }, 1000);

    if (recordstartedtime >= giventime) {
      stopRecording();
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRecording, recordstartedtime, giventime]);

  const restart = () => {
    setCountdown(practicetime);
    setRecordstartedTime(0);
    setAudioURL(null);
    chunks.current = [];
    setIsRecording(false);
    setError(null);
  };

  const perc = (recordstartedtime / giventime) * 100;

  const nextq = qn + 1;
  const prevq = qn - 1;
  const isGotoNext = nextq > totalquestion;
  const isGotoPrev = prevq < 1;

  const Next = () => {
    if (!isGotoNext) window.location.href = `/questions/pte/practice?type=readaloud&q=${nextq}`;
  };
  const Prev = () => {
    if (!isGotoPrev) window.location.href = `/questions/pte/practice?type=readaloud&q=${prevq}`;
  };

  if (isloading) return <p>Loading......</p>

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="mb-4">
        Look at the text below. You have {practicetime} seconds to read aloud as clearly as possible.
      </h2>

      <div className="border p-4 rounded mb-4">
        {countdown > 0 ? (
          <p>Recording will start in {countdown} seconds...</p>
        ) : isRecording ? (
          <p>Recording in progress...</p>
        ) : audioURL ? (
          <p>Recording finished</p>
        ) : null}

        {error && <p className="text-red-500">{error}</p>}

        <div className="my-2">
          {countdown === 0 && isRecording && (
            <div className="w-full border h-4 rounded-sm">
              <div className="bg-green-400 h-full" style={{ width: `${perc}%` }}></div>
            </div>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={stopRecording}
            disabled={!isRecording}
          >
            Stop
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={restart}>
            Restart
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={Prev}
            disabled={isGotoPrev}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded"
            onClick={Next}
            disabled={isGotoNext}
          >
            Next
          </button>
        </div>

        {audioURL && (
          <audio className="mt-4 w-full" controls src={audioURL} ref={audioRef} />
        )}
      </div>

      <div className="border p-4 rounded bg-gray-50">
        <p className="text-lg">{data?.question}</p>
      </div>
    </div>
  );
};

export default Speech;
