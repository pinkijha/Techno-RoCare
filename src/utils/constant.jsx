import appStore from '../assets/appStore.png'
import playstore from '../assets/googleplay.png'
import x from '../assets/x.png'
import facebook from '../assets/Facebook.png'
import insta from '../assets/Instagram.png'
import linkedin from '../assets/Linkedin.png'



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
    