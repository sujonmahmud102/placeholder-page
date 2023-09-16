import { useEffect, useState } from "react";

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Calculate the target date and time
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(15);
    targetDate.setMinutes(55);
    targetDate.setSeconds(10);

    // Function to update the countdown
    const updateCountdown = () => {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 14));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });
        }
    };

    useEffect(() => {
        const timer = setInterval(updateCountdown, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 shadow m-10 ">

            {/* Days */}
            <div className="stat bg-base-100 rounded-2xl">
                <div className="stat-figure text-primary">
                </div>
                <div className="stat-value text-primary">{countdown.days}  </div>
                <div className="stat-desc">Days</div>
            </div>


            {/* Hours */}
            <div className="stat bg-base-100 rounded-2xl">
                <div className="stat-figure text-primary">
                </div>
                <div className="stat-value text-primary">{countdown.hours} </div>
                <div className="stat-desc">Hours</div>
            </div>

            {/* Minutes */}
            <div className="stat bg-base-100 rounded-2xl">
                <div className="stat-figure text-primary">
                </div>
                <div className="stat-value text-primary">{countdown.minutes} </div>
                <div className="stat-desc">Minutes</div>
            </div>

            {/* seconds */}
            <div className="stat bg-base-100 rounded-2xl">
                <div className="stat-figure text-primary">
                </div>
                <div className="stat-value text-primary">{countdown.seconds} </div>
                <div className="stat-desc">Seconds</div>
            </div>

        </div>
    );
};

export default CountdownTimer;