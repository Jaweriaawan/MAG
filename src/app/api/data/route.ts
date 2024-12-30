import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(
        
[
  {
        "id": 1,
        "name": "ColorLuxe High Impact Lip Glaze",
        "price": "$32.00",
        "image": "/Images/makeup1.webp"
  },

  {
    "id": 2,
    "name": "Lash Fixation Length & Definition Tubing Mascara",
    "price": "$28.00",
    "image": "/Images/makeup1.webp"
   },

   {
    "id": 3,
    "name": "Lash Fixation Length & Definition Tubing Mascara",
    "price": "$28.00",
    "image": "/Images/makeup3.webp"
   },

   {
    "id": 4,
    "name": "Lash Fixation Length & Definition Tubing Mascara",
    "price": "$28.00",
    "image": "/Images/makeup4.webp"
   },
]


  )
}