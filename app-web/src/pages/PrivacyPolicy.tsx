import * as React from 'react';

import { useParams } from "react-router-dom";
import Container from '@mui/material/Container';

import AppBase from '../components/AppBase';
import Markdown from '../components/Markdown';
import post_en from '../posts/privacy-policy-en.md';
import post_ja from '../posts/privacy-policy-ja.md';

// プライバシーポリシー画面
export default function PrivacyPolicy() {
  // ポストを読み込む
  const {lang} = useParams();
  const [content, setContent] = React.useState<string>('');
  React.useEffect(() => {
    (async() => {
      const post = (lang && lang === 'ja') ? post_ja : post_en;
      const result = await (await fetch(post)).text();
      setContent(result);
    })();
  }, [lang]);

  return (
    <AppBase lang={lang}>
      <Container maxWidth="lg">
        <main>
          <Container sx={{py: 3}}>
            <Markdown className="markdown">
              {content}
            </Markdown>
          </Container>
        </main>
      </Container>
    </AppBase>
  );
}
