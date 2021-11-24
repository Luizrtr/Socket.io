import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div``;

export const Seach = styled.div`
  ${tw`relative text-gray-600`}

  input {
    ${tw`bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none`}
  }

  button {
    ${tw`absolute right-0 top-0 mt-3 mr-4`}
    svg {
      ${tw`h-4 w-4 fill-current`}
    }
  }
`;
