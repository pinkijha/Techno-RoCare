import appStore from '../assets/appStore.png'
import playstore from '../assets/googleplay.png'
import x from '../assets/x.png'
import facebook from '../assets/Facebook.png'
import insta from '../assets/Instagram.png'
import linkedin from '../assets/Linkedin.png'
import video1 from '../assets/v1.png'
import video2 from '../assets/v2.png'
import video3 from '../assets/v3.png'
import video4 from '../assets/v4.png'
import { LuMapPin, LuLayoutDashboard, LuCalendarClock, LuUsers   } from "react-icons/lu";
import { GoPeople, GoGear  } from "react-icons/go";
import { GrUserWorker, GrMapLocation } from "react-icons/gr";
import { FaHandshakeSimple, FaHandsHoldingCircle, FaGears } from "react-icons/fa6";
import { CiUser, CiImageOn } from "react-icons/ci";
import { IoIosLogOut, IoMdHelpCircleOutline  } from "react-icons/io";
import { BiBell, BiSolidOffer } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";
import { MdOutlinePayments, MdOutlineInventory2, MdOutlineCancel  } from "react-icons/md";
import { CgList } from "react-icons/cg";
import { TbCalendarWeek, TbCalendarTime, TbCalendarCheck } from "react-icons/tb";


export const footerItems = [
    {
        heading: "Company",
        items: [
            { id: 1, name: "About Us", path: "/about-us" },
            { id: 2, name: "Terms & Conditions", path: "/terms-conditions" },
            { id: 3, name: "Privacy Policy", path: "/privacy-policy" },
            { id: 4, name: "Careers", path: "/careers" }
        ]
    },
    {
        heading: "For Customers",
        items: [{ id: 1, name: "Contact Us", path: "/contact-us" }]
    },
    {
        heading: "For Partners",
        items: [{ id: 1, name: "Register as a professional", path: "/register-professional" }]
    },
    {
        heading: "Social Links",
        socialIcons: [
            { id: 1, icon: x, link: "https://twitter.com" },
            { id: 2, icon: facebook, link: "https://facebook.com" },
            { id: 3, icon: insta, link: "https://instagram.com" },
            { id: 4, icon: linkedin, link: "https://linkedin.com" },
        ],
        appLinks: [
            { id: 1, img: playstore, link: "https://www.apple.com/app-store/" },
            { id: 2, img: appStore, link: "https://play.google.com/store" }
        ]
    }
];
    

export const recommendedVideoItems = [
    {
        id: 1,
        img: video4,
        title: 'How to make payment for your service and purchase?',
    },
    {
        id: 2,
        img: video1,
        title: 'Why you need to buy AMC for your RO?',
    },
    {
        id: 3,
        img: video2,
        title: 'How to book service for your RO?',
    },
    {
        id: 4,
        img: video3,
        title: 'How to purchase AMC for your RO?',
    },
    {
        id: 5,
        img: video4,
        title: 'How to make payment for your service and purchase?',
    },
]

export const sidebarItems = [
    {
        groupName: '',
        groupItems: [
            {
                id: 1,
                name: 'Dashboard',
                icon: <LuLayoutDashboard />,
                path: '/admin'
            },
            {
                id: 2,
                name: 'City',
                icon: <LuMapPin />,
                path: '/admin/city'
            },
        ],

    },
    {
        groupName: 'Services & Products',
        groupItems: [
            {
                id: 1,
                name: 'Services',
                icon: <FaGears />,
                path: '/admin/services'
            },
            {
                id: 2,
                name: 'Products',
                icon: <FaHandsHoldingCircle />,
                path:'/admin/product',
            },
        ],

    },
    {
        groupName: 'Users',
        groupItems: [
            {
                id: 1,
                name: 'Customers',
                icon: <GoPeople />,
                path:'/admin/customers',
            },
            {
                id: 2,
                name: 'Technician',
                icon: <GrUserWorker />,
                path:'/admin/technician',
            },
            {
                id: 3,
                name: 'Partner',
                icon: <FaHandshakeSimple />,
                path:'/admin/partner',
            },
        ],

    },
    {
        groupName: 'Orders',
        groupItems: [
            {
                id: 1,
                name: 'Pending Orders',
                icon: <TbCalendarTime />,
                path:'/admin/pending-orders',
            },
            {
                id: 2,
                name: 'Complete Orders',
                icon: <TbCalendarCheck />,
                path:'/admin/orders',
            },
            {
                id: 3,
                name: 'Cancelled Orders',
                icon: <MdOutlineCancel />,                
                path:'/admin/orders',
            },
        ],

    },
    {
        groupName: 'Technicians Activity',
        groupItems: [
            {
                id: 1,
                name: 'Pending Services',
                icon: <LuCalendarClock />,
                path:'/admin/pending-services',

            },
            {
                id: 2,
                name: 'Technicians Activity',
                icon: <GrMapLocation />,
                path:'/admin/technician-activity',

            },
            {
                id: 3,
                name: 'Technicians Monitor',
                icon: <CgList />,
                path:'/admin/technician-monitor',

            },
        ],

    },
    {
        groupName: 'Partners Activity',
        groupItems: [
            {
                id: 1,
                name: 'Service List',
                icon: <CgList />,                
                path:'/admin/service-list',
            },
            {
                id: 2,
                name: 'Existing Client List',
                icon: <LuUsers />,                
                path:'/admin/client-list',
            },
            {
                id: 3,
                name: 'Partner Payout List',
                icon: <TbCalendarWeek />,
                path:'/admin/payout-list',

            },
        ],

    },
    {
        groupName: 'Others',
        groupItems: [
            {
                id: 1,
                name: 'Offers',
                icon: <BiSolidOffer />,                
                path:'/admin/offer',
            },
            {
                id: 2,
                name: 'Banner',
                icon: <CiImageOn />,                
                path:'/admin/banner-list',
            },
            {
                id: 3,
                name: 'Testimonial',
                icon: <FiMessageCircle />,
                path:'/admin/payout-list',

            },
            {
                id: 4,
                name: 'Timeslot & Date List',
                icon: <LuCalendarClock />,
                path:'/admin/timeslot',

            },
            {
                id: 5,
                name: 'Send Notification',
                icon: <BiBell/>,
                path:'/admin/send-notification',

            },
            {
                id: 6,
                name: 'Payment Gateway',
                icon: <MdOutlinePayments />,
                path:'/admin/payment',

            },
            {
                id: 7,
                name: 'Help & Support',
                icon: <IoMdHelpCircleOutline />,
                path:'/admin/help-support',

            },
            {
                id: 8,
                name: 'Inventory Management',
                icon: <MdOutlineInventory2 />,
                path:'/admin/inventory-management',

            },
        ],

    },
    {
        groupName: 'Admin',
        groupItems: [
            {
                id: 1,
                name: 'Profile',
                icon: <CiUser />,                
                path:'/admin/profile',
            },
            {
                id: 2,
                name: 'Settings',
                icon: <GoGear />,                
                path:'/admin/settings',
            },
            {
                id: 3,
                name: 'Logout',
                icon: <IoIosLogOut />,
                path:'/admin/logout',
                color: 'red'

            },
        ],

    },

]