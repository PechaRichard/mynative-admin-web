import React from "react";
import styled from "styled-components";

export const MetroBundler = () => {
  return(
      <Frame src="http://localhost:19002" title="W3Schools Free Online Web Tutorials"/>
  )
}

const Frame = styled.iframe`
  width: 100vw;
  height: 100vh;
`