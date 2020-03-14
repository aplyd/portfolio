import React from 'react'

export default function CircleSVG() {
    return (
        <div id="circle-container">
            <svg width="100%" height="100%" viewBox="0 0 295 295" fill="none" xmlns="http://www.w3.org/2000/svg" id="circle-svg">
                <g filter="url(#filter0_d)">
                <circle cx="147.5" cy="143.5" r="143.5" fill="url(#paint0_linear)"/>
                </g>
                <defs>
                <filter id="filter0_d" x="0" y="0" width="295" height="295" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear" x1="194.5" y1="104" x2="62.5" y2="298.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
    )
}
