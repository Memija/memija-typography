import React, { useState } from 'react';
import {
    DefaultValues,
    Footer,
    Header,
    Color,
    Direction,
    FontSize,
    LetterSpacing,
    LineHeight,
    TextAlign,
    TextDecoration,
    TextIndent,
    TextOverflow,
    TextShadow,
    TextTransform,
    WhiteSpace,
    WordSpacing,
    Input,
    CSSOutput,
    ViewOutput
} from './index';
import './AppStyle.less';

const App = () => {
    const [color, setColor] = useState(DefaultValues.color);
    const [direction, setDirection] = useState(DefaultValues.direction);
    const [fontSize, setFontSize] = useState(DefaultValues.fontSize);
    const [letterSpacing, setLetterSpacing] = useState(DefaultValues.letterSpacing);
    const [lineHeight, setLineHeight] = useState(DefaultValues.lineHeight);
    const [textAlign, setTextAlign] = useState(DefaultValues.textAlign);
    const [textDecoration, setTextDecoration] = useState(DefaultValues.textDecoration);
    const [textIndent, setTextIndent] = useState(DefaultValues.textIndent);
    const [textOverflow, setTextOverflow] = useState(DefaultValues.textOverflow);
    const [textShadow, setTextShadow] = useState(DefaultValues.textShadow);
    const [textTransform, setTextTransform] = useState(DefaultValues.textTransform);
    const [value, setValue] = useState(DefaultValues.value);
    const [whiteSpace, setWhiteSpace] = useState(DefaultValues.whiteSpace);
    const [wordSpacing, setWordSpacing] = useState(DefaultValues.wordSpacing);

    const letterSpacingWithSizeUnit = letterSpacing + 'px';
    const textIndentWithSizeUnit = textIndent + 'px';
    const wordSpacingWithSizeUnit = wordSpacing + 'px';

    return (
        <div>
            <Header />
            <div className="row app">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                    <Input onChange={setValue} />
                    <br />
                    <Color onChange={setColor} />
                    <hr />
                    <Direction onChange={setDirection} />
                    <hr />
                    <FontSize onChange={setFontSize} />
                    <hr />
                    <LetterSpacing onChange={setLetterSpacing} />
                    <hr />
                    <LineHeight onChange={setLineHeight} />
                    <hr />
                    <TextAlign onChange={setTextAlign} />
                    <hr />
                    <TextDecoration onChange={setTextDecoration} />
                    <hr />
                    <TextIndent onChange={setTextIndent} />
                    <hr />
                    <TextOverflow onChange={setTextOverflow} />
                    <hr />
                    <TextShadow onChange={setTextShadow} />
                    <hr />
                    <TextTransform onChange={setTextTransform} />
                    <hr />
                    <WhiteSpace onChange={setWhiteSpace} />
                    <hr />
                    <WordSpacing onChange={setWordSpacing} />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7">
                    <ViewOutput
                        color={color}
                        direction={direction}
                        fontSize={fontSize}
                        letterSpacing={letterSpacingWithSizeUnit}
                        lineHeight={lineHeight}
                        textAlign={textAlign}
                        textDecoration={textDecoration}
                        textIndent={textIndentWithSizeUnit}
                        textOverflow={textOverflow}
                        textShadow={textShadow}
                        textTransform={textTransform}
                        whiteSpace={whiteSpace}
                        wordSpacing={wordSpacingWithSizeUnit}
                        value={value}
                    />
                    <br />
                    <br />
                    <CSSOutput
                        color={color}
                        direction={direction}
                        fontSize={fontSize}
                        letterSpacing={letterSpacingWithSizeUnit}
                        lineHeight={lineHeight}
                        textAlign={textAlign}
                        textDecoration={textDecoration}
                        textIndent={textIndentWithSizeUnit}
                        textOverflow={textOverflow}
                        textShadow={textShadow}
                        textTransform={textTransform}
                        whiteSpace={whiteSpace}
                        wordSpacing={wordSpacingWithSizeUnit}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
