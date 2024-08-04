type ITitleProps = {
  className?: string;
  Text1: string;
  text2: string;
  text3: string;
  classNameP?: string;
};

export default function Text({
  className = "",
  Text1,
  text2,
  text3,
  classNameP = "",
}: ITitleProps) {
  return (
      <div className={`absolute text-gray-300 text-xl sm:text-[3rem] ${className}`}>
          <p className="text-[1.5rem] sm:text-[1.5rem]">
              <span className="text-blue-700 text-[1.9rem] sm:text-[2.5rem]">
                  <strong >{Text1}</strong>
              </span>{" "}
              {text2}
          </p>
          <p className={`${classNameP} text-[1.2rem] sm:text-[1.5rem]`}>
              <strong>{text3}</strong>
          </p>
      </div>
  );
}
