import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { handlePostState } from "../atoms/postAtom";

const Form = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [input, setInput] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const { data: session } = useSession();

  const uploadPost = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        input,
        photoUrl,
        username: session.user.name,
        email: session.user.email,
        image: session.user.image,
        createdAt: new Date().toString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await res.json();

    setHandlePost(true);
    setModalOpen(false);
  };
  return (
    <form className="flex flex-col relative space-y-2 text-black/80 dark:text-white/75">
      <textarea
        rows="4"
        placeholder="What do you want to talk about?"
        className="bg-transparent focus:outline-none dark:placeholder:text-white/75"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <input
        type="text"
        placeholder="Add a photo URL (optional)"
        className="bg-transparent focus:outline-none dark:placeholder:text-white/75 truncate max-w-xs md:max-w-sm"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />

      <button
        className="absolute bottom-0 right-0 bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:dark:bg-white/75 disabled:bg-black/20 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
        disabled={!input.trim() && !photoUrl.trim()}
        type="submit"
        onClick={uploadPost}
      >
        Post
      </button>
    </form>
  );
};

export default Form;
