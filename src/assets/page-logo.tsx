import React from "react";

const PageLogo = ({ width = "256px", height = "256px" }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M196 0H60C26.8629 0 0 26.8629 0 60V196C0 229.137 26.8629 256 60 256H196C229.137 256 256 229.137 256 196V60C256 26.8629 229.137 0 196 0Z" fill="#EB1F50" />
            <g filter="url(#filter0_d_107_819)">
                <path d="M123.4 86.0146C121.594 75.1796 111.631 70.4489 102.215 68.6459C68.5564 62.2007 49 105.471 49 132.415C49 150.949 56.4949 178.078 72.6 188.815C92.098 201.813 122.739 208.722 137.65 185.782C142.071 178.981 148.697 162.074 142.5 154.5C139.524 150.862 128.4 151.625 126.582 156.876C124.119 163.992 128.041 177.455 135.819 180.447C142.658 183.077 147.512 184.428 154.93 184.428C177.973 184.428 185.636 158.075 191.719 139.825M177 139.825C181.721 136.677 185.514 133.948 190.18 130.192C192.227 128.544 195.296 129.232 196.41 131.611C199.862 138.982 195.502 129.557 204 147" stroke="white" strokeWidth="15" strokeLinecap="round" shapeRendering="crispEdges" />
            </g>
            <g filter="url(#filter1_d_107_819)">
                <path d="M193.207 97.4455L207.553 101.294L214.607 74.9671L200.259 71.1269L193.207 97.4455ZM222.353 63.9668L216.249 62.3289C215.576 63.4333 214.564 64.2901 213.363 64.771C212.163 65.2518 210.839 65.331 209.59 64.9965C208.341 64.6621 207.233 63.932 206.434 62.9156C205.635 61.8993 205.186 60.6513 205.155 59.3585L199.05 57.7207C198.283 57.5187 197.468 57.6279 196.781 58.0244C196.094 58.4209 195.592 59.0726 195.383 59.8377L183.468 104.308C183.266 105.075 183.375 105.89 183.771 106.577C184.168 107.264 184.82 107.766 185.585 107.975L191.689 109.606C192.361 108.5 193.374 107.642 194.576 107.16C195.777 106.678 197.102 106.599 198.353 106.934C199.603 107.27 200.711 108.001 201.51 109.019C202.309 110.038 202.757 111.287 202.786 112.581L208.89 114.213C209.657 114.416 210.473 114.308 211.16 113.911C211.847 113.514 212.349 112.862 212.557 112.096L224.47 67.6337C224.674 66.8667 224.565 66.0504 224.169 65.3632C223.772 64.6761 223.119 64.174 222.353 63.9668ZM209.955 105.455L189.046 99.8479L197.859 66.9644L218.765 72.5662L209.955 105.455Z" fill="white" />
            </g>
            <defs>
                <filter id="filter0_d_107_819" x="37.5" y="60.4902" width="178.002" height="155.823" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_819" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_819" result="shape" />
                </filter>
                <filter id="filter1_d_107_819" x="180.168" y="57.6211" width="47.6021" height="63.0924" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3.2" />
                    <feGaussianBlur stdDeviation="1.6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_819" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_819" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default PageLogo;
