"use client";

import toast from "react-hot-toast";

const Toast = {
    SuccessshowToast: (message: string) => {
        toast.success(message, {
            style: {
                border: "1px solid #EB1F50",
                padding: "16px",
                color: "#EB1F50",
                backgroundColor: "#ffff",
            },
            iconTheme: {
                primary: "#EB1F50",
                secondary: "#ffff",
            },
        });
    },

    ErrorShowToast: (message: string) => {
        toast.error(message, {
            style: {
                border: "1px solid #ffff",
                padding: "16px",
                color: "#fff",
                backgroundColor: "#EB1F50",
            },
            iconTheme: {
                primary: "#ffff",
                secondary: "#EB1F50",
            },
        });
    },
};

export default Toast;
