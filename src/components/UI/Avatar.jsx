const Avatar = ({ image, alt, width, size, className = "", style, onClick }) => {
  return (
    <div
      className={`overflow-hidden rounded-full shrink-0 ${size || ""} ${className}`}
      style={width ? { width, height: width, ...style } : style}
      onClick={onClick}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;

// if you Avatar.jsx component not circle (rounded-full) ↑ removed rounded-full — now controlled by parent
// ✅ Round — pass rounded-full
{/* <Avatar
  image={ProfileImage}
  alt="Leobert Camoro"
  size="w-[100px] h-[100px]"
  className="rounded-full border-2 border-[#D9D4C9]"
/>

// ✅ Square — no rounded class
<Avatar
  image={ProfileImage}
  alt="Leobert Camoro"
  size="w-[100px] h-[100px]"
  className="border-2 border-[#D9D4C9]"
/>

// ✅ Rounded corners — pass rounded-xl
<Avatar
  image={ProfileImage}
  alt="Leobert Camoro"
  size="w-[100px] h-[100px]"
  className="rounded-xl border-2 border-[#D9D4C9]"
/> */}

// overide "round-full" use inline style
// // ✅ Override shape with inline style
// <Avatar
//   image={ProfileImage}
//   alt="Leobert Camoro"
//   size="w-[100px] h-[100px]"
//   style={{ borderRadius: "0px" }}        // ← square
// />

// // ✅ Custom border radius
// <Avatar
//   image={ProfileImage}
//   alt="Leobert Camoro"
//   size="w-[100px] h-[100px]"
//   style={{ borderRadius: "12px" }}       // ← rounded corners
// />

// // ✅ Circle via inline style
// <Avatar
//   image={ProfileImage}
//   alt="Leobert Camoro"
//   size="w-[100px] h-[100px]"
//   style={{ borderRadius: "50%" }}        // ← full circle
// />

//version 2
// const Avatar = ({ image, alt, width, size, className = "", style }) => {
//   return (
//     <div
//       className={`overflow-hidden rounded-full shrink-0 ${size || ""} ${className}`}
//       style={width ? { width, height: width, ...style } : style}
//     >
//       <img
//         src={image}
//         alt={alt}
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// };

// export default Avatar;

// version 1
// ✅ Tailwind version — no need for Avatar.css

// const Avatar = ({ image, alt, width = "100px", className = "", style }) => {
//   return (
//     <div
//       className={`overflow-hidden rounded-full ${className}`}
//       style={{ width, height: width, ...style }}
//     >
//       <img
//         src={image}
//         alt={alt}
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// };

// export default Avatar;