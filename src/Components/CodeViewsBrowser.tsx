import { Box, Button, useClipboard } from "@chakra-ui/react";
import {CodeBlock, SupportedLanguages} from "@atlaskit/code"

export interface ICodeViewsBrowserProps {
  key: string;
  language: SupportedLanguages;
  title?: string;
  textCode: string;
}

export default function CodeViewsBrowser ({key, language, title="", textCode=""}: ICodeViewsBrowserProps) {
  const {hasCopied, onCopy} = useClipboard(textCode)

  return (
    <>
      <Button 
        marginTop="7" 
        onClick={onCopy}
        position="absolute" 
        right="4" 
        size="xs"
      >
          {hasCopied ? "Copied!" : "Copy"}
      </Button>
      <CodeBlock 
        key={key}
        language={language}
        showLineNumbers={true}
        text={textCode}
      />
      {title && 
        <Box
          bg="#121a29"
          borderBottomLeftRadius="5"
          borderBottomRightRadius="5"
          color="#9fb0cc"
          fontSize="sm"
          padding="1"
          paddingEnd="10"
          paddingStart="10"
        >
          {title}
        </Box>
      }
    </>
  );
}
