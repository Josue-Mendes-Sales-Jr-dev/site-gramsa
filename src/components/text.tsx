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
      <div className={`absolute text-gray-300 text-xl md:text-4xl ${className}`}>
          <p>
              <span className="text-blue-700">
                  <strong>{Text1}</strong>
              </span>{" "}
              {text2}
          </p>
          <p className={classNameP}>
              <strong>{text3}</strong>
          </p>
      </div>
  );
}
