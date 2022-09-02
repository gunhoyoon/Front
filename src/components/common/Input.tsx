import React, { FC, useState } from "react";

interface Props {
  onChange?: Function;
  type?: "email" | "password" | "text";
  // 타입 별로 내가 만들어놨으니까 각각 그 타입때마다 적용시킬 구조를 다 써놔야됨
  placeholder?: string;
  style?: object;
  name?: string; // 이 인풋창의 이름을 명시하기 위함 ex) username , useremail
  text?: string | number;
}

const Input: FC<Props> = ({
  onChange = () => {},
  type,
  name,
  placeholder,
  style,
  text,
}) => {
  const [isBlur, setIsBlur] = useState(true);

  return (
    // onChange 정의가 안그려짐 머릿속에서
    // label를 통해 감싸져있는 태그가 어떤 걸 의미하는 태그인지 좀 더 명확하게 알 수 있다.
    // 어차피 옵셔널이라 써도 그만 안써도 그만이니까 인풋에 다 떄려박아도 되는걸까 ?? ?
    <>
      {type === "password" ? (
        <label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange(e);
              setIsBlur(false);
            }}
            type={type}
            name={name}
            placeholder={placeholder}
            style={style}
          >
            {text}
          </input>
        </label>
      ) : null}
      {type === "email" ? (
        <label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange(e);
            }}
            type={type}
            name={name}
            placeholder={placeholder}
            style={style}
          >
            {text}
          </input>
        </label>
      ) : null}
      {type === "text" ? (
        <label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange(e);
            }}
            type={type}
            name={name}
            placeholder={placeholder}
            style={style}
          >
            {text}
          </input>
        </label>
      ) : null}
      <>{isBlur ? <div>올바른 입력형식을 지켜주세요.</div> : null}</>
      {/* 조건하나 더달기  */}
      {/* 온블러함수를 어떻게 처리할건지 */}
      {/*  */}
    </>
  );
};

export default Input;

//
