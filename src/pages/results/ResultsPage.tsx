import React from "react";
import { Svg, Transcription, Word } from "../start/StartPage.style";
import {
  AudioIconRes,
  ErrorNums,
  ResBtn,
  ResContainer,
  ResItem,
  Results,
  ResWrap,
  SuccessNums,
} from "./ResultsPage.style";

const ResultsPage = () => {
  return (
    <Results visible={true}>
      <ResContainer>
        <p>
          Errors <ErrorNums>4</ErrorNums>
        </p>
        <ResWrap>
          <ResItem>
            <AudioIconRes>
              <Svg xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z"
                  fillRule="evenodd"
                ></path>
              </Svg>
            </AudioIconRes>
            <Word>error</Word>
            <Transcription>[ˈerər]</Transcription>
          </ResItem>
        </ResWrap>
        <p>
          Correct <SuccessNums>2</SuccessNums>
        </p>
        <ResWrap>
          <ResItem>
            <AudioIconRes>
              <Svg xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z"
                  fillRule="evenodd"
                ></path>
              </Svg>
            </AudioIconRes>
            <Word>success</Word>
            <Transcription>[səkˈses]</Transcription>
          </ResItem>
        </ResWrap>
        <div>
          <ResBtn to="/">Return</ResBtn>
          <ResBtn to="/">New game</ResBtn>
        </div>
      </ResContainer>
    </Results>
  );
};

export default ResultsPage;