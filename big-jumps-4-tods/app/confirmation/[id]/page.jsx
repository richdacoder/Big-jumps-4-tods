// "use client";
// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";

// function ConfirmRequest() {
//   const { id } = useParams();
//   const [request, setRequest] = useState(null);

//   console.log('connecting',id);
//   const formatDate = (dateString) =>
//   new Date(dateString).toLocaleDateString("en-US", {
//     weekday: "long",
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });

// const formatTime = (dateString) =>
//   new Date(dateString).toLocaleTimeString("en-US", {
//     hour: "numeric",
//     minute: "2-digit",
//   });


//   useEffect(() => {
//     if (!id) return;

//     const fetchRequest = async () => {
//       try {
//         const res = await fetch(`http://localhost:3002/api/request/${id}`);
//         const data = await res.json();
//         setRequest(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchRequest();
//   }, [id]);

// return (
//   <>
//     <h2>Request Confirmed 🎉</h2>

//     {request && (
//       <div>
//         <p>
//           Thank you <strong>{request.first_name} {request.last_name}</strong>!
//         </p>

//         <p>
//           We’ve received your party request for{" "}
//           <strong>{formatDate(request.party_date)}</strong> from{" "}
//           <strong>
//             {formatTime(request.party_start_time)} –{" "}
//             {formatTime(request.party_end_time)}
//           </strong>.
//         </p>

//         <p>
//           Our team will review your request and contact you shortly to let you
//           know whether it has been accepted or not.
//         </p>

//         <p>
//           A confirmation has also been sent to{" "}
//           <strong>{request.email}</strong>.
//         </p>
//       </div>
//     )}
//   </>
// );
// }

// export default ConfirmRequest;
"use client";

function ConfirmRequest() {
  return <div>working</div>;
}

export default ConfirmRequest;
