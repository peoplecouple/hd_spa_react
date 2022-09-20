import { useState } from 'react';
import styles from './App.module.scss'
//모듈을 쓰면 클래스이름을 바꾼다. 클래스의 이름이 겹칠 일이 없다.
function App() {
  const [on, setOn] = useState(false)
  return (
    <div className={`${styles.App} ${on && styles.on}`}>
      <strong className='inner' onClick={() => {
        setOn(!on)
      }}>dd</strong>
      dd
    </div>
  );
}

export default App;
