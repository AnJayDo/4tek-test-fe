import Countdown, { CountdownRenderProps } from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

const renderer = ({
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

export default function Hero({ content }: { content: { hero?: any } }) {
  <div className="w-full bg-[url(/images/hero-bg.png)] bg-cover min-h-screen bg-bottom">
    <div className="w-full max-w-[1460px] flex flex-col justify-center items-center relative">
      <h1 className="">{content?.hero?.title}</h1>
      <Countdown date={Date.now() + 10000} renderer={renderer} />
    </div>
  </div>;
}
