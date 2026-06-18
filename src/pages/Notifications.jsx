import {
 Bell,
 CheckCircle,
 Clock,
 UserCheck,
 AlertTriangle,
 CheckCheck,
} from "lucide-react";

import { motion } from "framer-motion";

function Notifications() {

 const notifications = [

  {
   title:"Booking Confirmed",
   desc:"Your cleaning service has been booked successfully.",
   time:"2 mins ago",
   icon:<CheckCircle />,
   bg:"bg-green-50",
   color:"text-green-600",
  },

  {
   title:"Helper Assigned",
   desc:"Rahul Sharma has been assigned to your request.",
   time:"5 mins ago",
   icon:<UserCheck />,
   bg:"bg-blue-50",
   color:"text-blue-600",
  },

  {
   title:"Helper Arriving",
   desc:"Your helper is arriving in 12 minutes.",
   time:"10 mins ago",
   icon:<Clock />,
   bg:"bg-orange-50",
   color:"text-orange-600",
  },

  {
   title:"Service Completed",
   desc:"Cleaning service completed successfully.",
   time:"Yesterday",
   icon:<CheckCheck />,
   bg:"bg-teal-50",
   color:"text-teal-600",
  },

  {
   title:"Reassignment Alert",
   desc:"Original helper unavailable. Assigning new helper.",
   time:"Yesterday",
   icon:<AlertTriangle />,
   bg:"bg-red-50",
   color:"text-red-600",
  },

 ];

 return (

  <div className="min-h-screen bg-slate-50">

   {/* Header */}

   <div
    className="
    bg-gradient-to-r
    from-blue-600
    to-teal-500
    text-white
    py-10
    "
   >

    <div className="max-w-7xl mx-auto px-6">

     <div className="flex justify-between items-center">

      <div>

       <h1 className="text-4xl font-bold">
        Notifications
       </h1>

       <p className="mt-2">
        Stay updated with your bookings
       </p>

      </div>

      <Bell size={40}/>

     </div>

    </div>

   </div>

   {/* Content */}

   <div className="max-w-7xl mx-auto px-6 py-10">

    {/* Top Controls */}

    <div
     className="
     bg-white
     rounded-3xl
     shadow-lg
     p-6
     flex
     flex-col
     md:flex-row
     gap-4
     justify-between
     items-center
     "
    >

     <div className="flex gap-3 flex-wrap">

      <button
       className="
       px-5
       py-2
       rounded-full
       bg-blue-600
       text-white
       "
      >
       All
      </button>

      <button
       className="
       px-5
       py-2
       rounded-full
       bg-slate-100
       "
      >
       Unread
      </button>

      <button
       className="
       px-5
       py-2
       rounded-full
       bg-slate-100
       "
      >
       Booking
      </button>

      <button
       className="
       px-5
       py-2
       rounded-full
       bg-slate-100
       "
      >
       Service
      </button>

     </div>

     <button
      className="
      bg-teal-500
      text-white
      px-5
      py-3
      rounded-2xl
      "
     >
      Mark All Read
     </button>

    </div>

    {/* Notification List */}

    <div className="mt-8 space-y-5">

     {notifications.map((item,index)=>(

      <motion.div

       key={index}

       whileHover={{
        y:-5
       }}

       className="
       bg-white
       rounded-3xl
       shadow-lg
       p-6
       cursor-pointer
       "
      >

       <div className="flex gap-5">

        <div
         className={`
         ${item.bg}
         ${item.color}
         w-16
         h-16
         rounded-2xl
         flex
         items-center
         justify-center
         `}
        >
         {item.icon}
        </div>

        <div className="flex-1">

         <div className="flex justify-between">

          <h3 className="font-bold text-lg">
           {item.title}
          </h3>

          <span className="text-gray-400">
           {item.time}
          </span>

         </div>

         <p className="text-gray-500 mt-2">
          {item.desc}
         </p>

        </div>

       </div>

      </motion.div>

     ))}

    </div>

   </div>

  </div>

 );
}

export default Notifications;