/*
useContext
전역적인(여러 컴포넌트에서 공유할) 값을 저장하는 용도로 useContext 훅 사용
리액트 앱은 컴포넌트 트리 구조로 만들어짐
props를 이용해서 자식 컴포넌트에 값을 전달함(prop drilling)
남용하면 컴포넌트 재사용에 문제가 발생할 수 있음

const value = useContext(컨텍스트)

*/

import { useState } from 'react';
import ThemeContext from './ThemeContext';
