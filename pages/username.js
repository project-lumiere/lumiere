import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

export default function Username() {
  const [username, setUsername] = useState('');
  const router = useRouter();
  const redirectUrl = useRef();

  useEffect(() => {
    const url = new URL(location.href);
    redirectUrl.current = url.searchParams.get('callbackUrl');
  }, []);

  const submitUsername = async (e) => {
    e.preventDefault();

    try {
      const body = { username: `@${username}` };
      await fetch('/api/user/username', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await router.push(redirectUrl.current);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Set your username</h1>
      <form onSubmit={submitUsername}>
        <span>@</span>
        <input
          type='text'
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          disabled={!username}
        />
        <input type='submit' value='Submit username' />
      </form>
    </>
  );
}

Username.getLayout = function getLayout(page) {
  return page;
};
