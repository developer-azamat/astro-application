import { useEffect, useState } from "preact/hooks";

export default function MySwiper() {
  const [state, setState] = useState(0);

  const slideImages = [
    "https://static.vecteezy.com/system/resources/thumbnails/006/965/779/small/empty-top-wooden-table-and-sakura-flower-with-fog-and-morning-light-background-photo.jpg",
    "https://media.istockphoto.com/id/926718828/photo/spring-garden-background.jpg?s=170667a&w=0&k=20&c=SfqWNrqsDMX6f6sCCwRWm2iqSbauGJokF-yB1dHseQQ=",
    "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  ];

  function nextImage() {
    setState((state) =>
      state == slideImages.length - 1 ? (state = 0) : state + 1
    );
  }

  function prevImg() {
    setState((state) =>
      state == 0 ? (state = slideImages.length - 1) : state - 1
    );
  }
  return (
    <div class="flex items-center gap-1">
      <button
        onClick={() => prevImg()}
        class=" bg-[#ffffff00] absolute hover:bg-[#ffffff72] left-0 text-white w-20 h-screen cursor-pointer hover:bg-cyan-600/20 transition-all duration-200 ease-linear"
      >
        prev
      </button>
      <img src={slideImages[state]} class="w-[100%] h-screen object-cover" alt="" />
      <button
        onClick={() => nextImage()}
        class=" bg-transparent absolute hover:bg-[#ffffff72] right-0 text-white w-20 h-screen cursor-pointer hover:bg-cyan-600/20 transition-all duration-200 ease-linear"
      >
        next
      </button>
    </div>
  );
}
