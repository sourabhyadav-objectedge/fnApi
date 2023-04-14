const express = require("express");
const app = express();
const PORT = 7070;
const all = [
  {
    id: "2820",
    type: "function",
    subtype: "post",
    author: {
      profilId: "3647",
      name: "Paul Anda",
      badge: "Angel",
      avatarUrl:
        "https://res.cloudinary.com/foundersnetwork/image/upload/c_scale,h_58,r_4,w_58/g_south_east,h_11,l_fn_22_mw4cdy,r_0:0:4:0,w_11/v1/production/userprofile/da59df85100fe97b7a622c76ab291de4.jpg",
    },
    title: "How to Get Startup Investors to Say Yes with Sharon Zehavi",
    creationTimestamp: "1681470306",
    media: {
      imageSrc:
        "https://fnprofileimages3.s3.amazonaws.com/production/files/py4wf29/5_9_Sharon_Zehavi_-_FN_Header.png",
      altText: "How to Get Startup Investors to Say Yes with Sharon Zehavi",
    },
    analytics: { like: 2 },
    details: {
      startDate: "May 9, 2023",
      startTimePT: "9:30 AM",
      startTimeET: "12:30 PM",
    },
    bookmarked: true,
  },
  {
    id: "2782",
    type: "function",
    subtype: "rsvp",
    author: {
      profilId: "296",
      name: "Jelle van Geuns",
      badge: "Bootstrap",
      avatarUrl:
        "https://res.cloudinary.com/foundersnetwork/image/upload/c_scale,h_58,r_4,w_58/g_south_east,h_11,l_fn_22_mw4cdy,r_0:0:4:0,w_11/v1/photos/upload-296.jpg",
    },
    attendies: [
      { profilId: "6112", name: "Arsalan Noroozzadeh" },
      { profilId: "7661", name: "Yves Jean" },
      { profilId: "296", name: "Jelle van Geuns" },
    ],
    extraAttendiesCount: "34",
    creationTimestamp: "1681471627",
    title: "fnGlobal Keynote & Roundtables with Bharath Krishnamoorthy",
    media: {
      imageSrc:
        "https://fnprofileimages3.s3.amazonaws.com/production/files/7739woh/Bharath_Krishnamoorthy_-_FN_Header_2.png",
      altText: "fnGlobal Keynote & Roundtables with Bharath Krishnamoorthy",
    },
    analytics: { like: 3 },
    details: {
      startDate: "May 16, 2023",
      startTimePT: "9:30 AM",
      startTimeET: "12:30 PM",
    },
    bookmarked: true,
  },
  {
    id: "2806",
    type: "function",
    subtype: "question",
    author: {
      profilId: "7461",
      name: "Alora Baver",
      badge: "Bootstrap",
      avatarUrl:
        "https://res.cloudinary.com/foundersnetwork/image/upload/c_scale,h_58,r_4,w_58/g_south_east,h_11,l_fn_22_mw4cdy,r_0:0:4:0,w_11/v1/production/userprofile/446144cddc6cb963de13d009c52c46ff.jpg",
    },
    title: "Influencer Marketing for Startups with Sarah Fruy",
    media: {
      imageSrc:
        "https://fnprofileimages3.s3.amazonaws.com/production/files/yge7atk/4_25_Sarah_Fruy_-_FN_Header_1.png",
      altText: "Influencer Marketing for Startups with Sarah Fruy",
    },
    analytics: { like: 1 },
    details: {
      startDate: "April 25, 2023",
      startTimePT: "9:30 AM",
      startTimeET: "12:30 PM",
    },
    bookmarked: false,
  },
  {
    id: "15928",
    type: "forum",
    author: {
      profilId: "7011",
      name: "Sushil Kumar",
      badge: "Bootstrap",
      avatarUrl:
        "https://res.cloudinary.com/foundersnetwork/image/upload/c_scale,h_58,r_4,w_58/g_south_east,h_11,l_fn_22_mw4cdy,r_0:0:4:0,w_11/v1/production/userprofile/e44232a82a66cb7cedef4f43527bdd6b.jpg",
      companyName: "SynergyLabs Technology Pvt Ltd",
    },
    dateTime: {
      creationDate: "April 13, 2023",
      creationTimePT: "02:16 p.m",
      creationTimeET: "09:16 a.m.",
    },
    title: "Our new generative ai product | feedback needed",
    analytics: { like: 3, comment: 2, privateComment: 1 },
    details: {
      content: `Happy to Announce pre-launch of MAILMIND. Our generative AI tools for email marketing.

    Will be especially useful for technical founders and anybody who is still in their 0-1 journey.
    
    Any feedback is much appreciated
    
    - Any features you want to see specifically.
    
    - Does it actually help you in email marketing?
    
    - What would be the best way to reach out to larger audience once we go live.
    
     
    
    Do signup if you like it:) We are preparing to launch in next 4-8 weeks`,
    },
    bookmarked: false,
  },
  {
    id: "425",
    type: "group",
    author: {
      profilId: "8112",
      name: "Javier Antonio Enríquez Gutiérrez",
      badge: "Bootstrap",
      avatarUrl:
        "https://res.cloudinary.com/foundersnetwork/image/upload/c_scale,h_58,r_4,w_58/g_south_east,h_11,l_fn_22_mw4cdy,r_0:0:4:0,w_11/v1/production/userprofile/ce6205f82806990bd8ee579405e03346.jpg",
    },
    dateTime: { creationDate: "", creationTimePT: "", creationTimeET: "" },
    groupName: "Vancouver Chapter",
    members: [
      {
        profileId: "7738",
        name: "Irbaz Wahab",
        badge: "Bootstrap",
        avatarUrl:
          "https://res.cloudinary.com/foundersnetwork/image/upload/c_scale,h_70,r_4,w_70/g_south_east,h_12,l_fn_22_mw4cdy,r_0:0:4:0,w_12/v1/production/userprofile/beca49410914935037178693eec5c3df.jpg",
      },
      {
        profileId: "7233",
        name: "Hossein Rezaei",
        badge: "Bootstrap",
        avatarUrl:
          "https://res.cloudinary.com/foundersnetwork/image/upload/c_scale,h_70,r_4,w_70/g_south_east,h_12,l_fn_22_mw4cdy,r_0:0:4:0,w_12/v1/production/userprofile/3a5344ba9e7bd0f95464f1de19832951.jpg",
      },
      {
        profileId: "7036",
        name: "Rakib Islam",
        badge: "Bootstrap",
        avatarUrl:
          "https://res.cloudinary.com/foundersnetwork/image/upload/c_scale,h_70,r_4,w_70/g_south_east,h_12,l_fn_22_mw4cdy,r_0:0:4:0,w_12/v1/production/userprofile/d4b645651a87f036bbc96699338292d7.jpg",
      },
    ],
    additionalMemberCount: 22,
    isPrivate: true,
    analytics: { like: 4 },
    details: { content: "" },
    bookmarked: false,
  },
  {
    id: "132",
    type: "deal",
    author: {
      profilId: "8252",
      name: "Jacob Gross",
      badge: "Angel",
      avatarUrl:
        "https://res.cloudinary.com/foundersnetwork/image/upload/c_scale,h_58,r_4,w_58/g_south_east,h_11,l_fn_22_mw4cdy,r_0:0:4:0,w_11/v1/production/userprofile/8eaf0a5814521d62fecd9c49be772b0b.jpg",
    },
    dateTime: {
      creationDate: "April 12, 2023",
      creationTimePT: "11:19 AM",
      creationTimeET: "2:59 PM",
    },
    members: [
      { profileId: "8364", name: "Rohit Rai" },
      { profileId: "8324", name: "Rohildev Nattukallingal" },
    ],
    additionalMemberCount: 18,
    analytics: { like: 5 },
    details: {
      dealProvider: "DocSend",
      title: "90% Off DocSend for A Year",
      image:
        "https://fnprofileimages3.s3.amazonaws.com/production/hidden_company/b0cc7a15e2575ae08266f6f27fd5dfa5.png",
      allowedTo: ["Angel", "Bootstrap"],
    },
    bookmarked: false,
  },
  {
    id: "4389",
    type: "member",
    author: {
      profilId: "4389",
      name: "Ford Seeman",
      badge: "Angel",
      avatarUrl:
        "https://res.cloudinary.com/foundersnetwork/image/upload/c_scale,h_58,r_4,w_58/g_south_east,h_11,l_fn_22_mw4cdy,r_0:0:4:0,w_11/v1/production/userprofile/c29db24f873a62441750e73f1bc10a65.jpg",
    },
    dateTime: {
      creationDate: "April 13, 2023",
      creationTimePT: "10:36 AM",
      creationTimeET: "2:46 PM",
    },
    nominated: "Zoya Lehrer",
    analytics: { like: 0 },
    bookmarked: false,
  },
];
const forums = 0;

app.get(/v1\/users\/(.*)\/feeds\/all/, (req, res) => {
  res.json(all);
});
app.get(/v1\/users\/(.*)\/feeds\/forums/, (req, res) => {
  res.json(forums);
});
app.listen(PORT, "127.0.0.1", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server running on port " + PORT);
});
