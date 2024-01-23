<h2>리액트 개인 프로젝트</h2>
<p>타입스크립트와 함께하는 리액트 모던 웹 개발 책을 통해 React 프로젝트를 독학</p>
<p>· 팀 프로젝트를 위해 600페이지 분량의 리액트 교재를 독학하여 완독</p>
 
 · 프로젝트 성과 : 타입스크립트 사용법과 리액트 문법을 직접 실습하여 학습
   1) 리액트 개발 환경 설정에 능숙
   2) 리액트 동작원리(DOM/JSX/컴포넌트)에 대해서 심층적으로 공부
   3) 프로젝트에 TailwindCSS 완벽하게 적용 가능
   4) 함수형 컴포넌트와 리액트 훅에 대한 심층적 이해를 바탕으로 활용할 수 있는 능력 향상
   5) 리덕스를 활용한 프로젝트의 상태 관리 방법을 깊이 이해
   6) 리액트 라우터를 통해 프로젝트 구조 설계 능력 향상
   7) Express 프레임워크와 MongoDB를 활용한 API 서버 구축 경험
     
- 트렐로를 모방한 프로젝트를 통해 Action, dispatch, store, reducer를 활용하는 redux에 대한 전반적인 이해와 복잡한 이중 배열의 CRUD 구현 경험
- 기존 프로젝트의 useContext를 Redux Flux 패턴으로 변경하기 위한 추가적인 독학을 진행

<div><img src="https://github.com/jingom368/React-Study/assets/67932739/41cfab3c-8507-4505-a5c4-c07efa079c67" ></div>

```
├─ src
│  ├─ App.css
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ components
│  │  ├─ 3-1. Icon.tsx
│  │  ├─ 3-2. Texts.tsx
│  │  ├─ 3-2. textUtil.ts
│  │  ├─ 3-3. Avatar.tsx
│  │  ├─ 3-3. Div.tsx
│  │  ├─ 3-3. LeftRightTopBottom.ts
│  │  ├─ 3-3. Overlay.tsx
│  │  ├─ 3-3. WidthHeight.ts
│  │  ├─ 3-4. MinMaxWidthHeight.ts
│  │  ├─ 5-4. e_CardDraggable.tsx
│  │  ├─ 5-4. e_CardDroppable.tsx
│  │  ├─ 5-4. e_ListDraggable.tsx
│  │  ├─ 5-4. e_ListDroppable.tsx
│  │  └─ index.ts
│  ├─ contexts
│  │  ├─ 4-6. e_ResponsiveContext.tsx
│  │  └─ index.ts
│  ├─ copy
│  │  └─ store
│  ├─ cote.py
│  ├─ data
│  │  ├─ 1-5. chance.ts
│  │  ├─ 1-5. date.ts
│  │  ├─ 1-5. image.ts
│  │  ├─ 1-5. util.ts
│  │  ├─ 3-4. Card.ts
│  │  ├─ 3-4. User.ts
│  │  ├─ 4-4. fetchRandomUser.ts
│  │  └─ index.ts
│  ├─ hooks
│  │  ├─ 4-1. useClock.ts
│  │  ├─ 4-1. useInterval.ts
│  │  ├─ 4-3. useToggle.ts
│  │  ├─ 4-4. useEventListener.ts
│  │  ├─ 4-4. useWindowResize.ts
│  │  └─ index.ts
│  ├─ index.css
│  ├─ index.tsx
│  ├─ pages
│  │  ├─ 2-5. DispatchEvent.tsx
│  │  ├─ 2-5. DragDrop.tsx
│  │  ├─ 2-5. EventBubbling.tsx
│  │  ├─ 2-5. EventListener.tsx
│  │  ├─ 2-5. FileDrop.tsx
│  │  ├─ 2-5. FileInput.tsx
│  │  ├─ 2-5. OnChange.tsx
│  │  ├─ 2-5. OnClick.tsx
│  │  ├─ 2-5. ReactOnClick.tsx
│  │  ├─ 2-5. StopPropagation.tsx
│  │  ├─ 2-5. VariousInputs.tsx
│  │  ├─ 3-1. Bootstrap.tsx
│  │  ├─ 3-1. Icon.tsx
│  │  ├─ 3-1. Style.tsx
│  │  ├─ 3-1. UsingIcon.tsx
│  │  ├─ 3-1. UsingIconWithCSSClass.tsx
│  │  ├─ 3-2. Color.tsx
│  │  ├─ 3-2. Tailwindcss.tsx
│  │  ├─ 3-2. TextsTest.tsx
│  │  ├─ 3-3. AvatarTest.tsx
│  │  ├─ 3-3. BackgroundImageTest.tsx
│  │  ├─ 3-3. BorderTest.tsx
│  │  ├─ 3-3. DispalyNoneTest.tsx
│  │  ├─ 3-3. DisplayTest.tsx
│  │  ├─ 3-3. DivTest.tsx
│  │  ├─ 3-3. HeightTest.tsx
│  │  ├─ 3-3. ImageTest.tsx
│  │  ├─ 3-3. MarginTest.tsx
│  │  ├─ 3-3. OverlayTest.tsx
│  │  ├─ 3-3. PaddingTest.tsx
│  │  ├─ 3-3. PositionTest.tsx
│  │  ├─ 3-3. ViewportTest.tsx
│  │  ├─ 3-4. AlignTest.tsx
│  │  ├─ 3-4. Card.tsx
│  │  ├─ 3-4. CardContainer.tsx
│  │  ├─ 3-4. DirectionTest.tsx
│  │  ├─ 3-4. JustifyCenterTest.tsx
│  │  ├─ 3-4. MinMaxTest.tsx
│  │  ├─ 3-4. User.tsx
│  │  ├─ 3-4. UserContainer.tsx
│  │  ├─ 3-4. WrapTest.tsx
│  │  ├─ 3-5. ButtonTest
│  │  │  ├─ 3-5. Basic.tsx
│  │  │  ├─ 3-5. IconTest.tsx
│  │  │  ├─ 3-5. Size.tsx
│  │  │  └─ index.tsx
│  │  ├─ 3-5. InputTest
│  │  │  ├─ 3-5. Basic.tsx
│  │  │  ├─ 3-5. Border.tsx
│  │  │  ├─ 3-5. Color.tsx
│  │  │  ├─ 3-5. Size.tsx
│  │  │  └─ index.tsx
│  │  ├─ 3-5. ModalTest.tsx
│  │  ├─ 4-1. Clock.tsx
│  │  ├─ 4-2. Callback.tsx
│  │  ├─ 4-2. HighOrderCallback.tsx
│  │  ├─ 4-2. Memo.tsx
│  │  ├─ 4-2. useOrCreate.ts
│  │  ├─ 4-2. UseOrCreateTest.tsx
│  │  ├─ 4-3. ArrayState.tsx
│  │  ├─ 4-3. BasicForm.tsx
│  │  ├─ 4-3. HigherOrderRadioInputTest.tsx
│  │  ├─ 4-3. InputTest.tsx
│  │  ├─ 4-3. NumberState.tsx
│  │  ├─ 4-3. ObjectState.tsx
│  │  ├─ 4-3. RadioInputTest.tsx
│  │  ├─ 4-3. ShowHideModal.tsx
│  │  ├─ 4-4. ClassLifecycle.tsx
│  │  ├─ 4-4. FetchTest.tsx
│  │  ├─ 4-4. WindowResizeTest.tsx
│  │  ├─ 4-5. ClickTest.tsx
│  │  ├─ 4-5. e_FileDrop.tsx
│  │  ├─ 4-5. e_ValidatableInputTest.tsx
│  │  ├─ 4-5. ForwardRefTest.tsx
│  │  ├─ 4-5. InputFocusTest.tsx
│  │  ├─ 4-5. InputValueTest.tsx
│  │  ├─ 4-6. ResponsiveContextTest.tsx
│  │  ├─ 5-1. e_ReduxClock.tsx
│  │  ├─ 5-1. UseReducerClock.tsx
│  │  ├─ 5-2. CardsTest
│  │  │  ├─ 5-2. Card.tsx
│  │  │  └─ index.tsx
│  │  ├─ 5-2. e_ClockTest.tsx
│  │  ├─ 5-2. e_CounterTest.tsx
│  │  ├─ 5-2. e_RemoteUserTest.tsx
│  │  ├─ 5-3. e_ErrorMessageTest.tsx
│  │  ├─ 5-3. e_FetchTest.tsx
│  │  ├─ 5-3. e_LoadingTest.tsx
│  │  ├─ 5-3. e_LoggerTest.tsx
│  │  ├─ 5-4. Board
│  │  │  ├─ 5-4. e_CreateListForm.tsx
│  │  │  └─ index.tsx
│  │  ├─ 5-4. BoardList
│  │  │  └─ index.tsx
│  │  └─ 5-4. ListCard
│  │     └─ index.tsx
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ setupTests.ts
│  ├─ store
│  │  ├─ 5-1. Appstate.ts
│  │  ├─ 5-1. e_actions.ts
│  │  ├─ 5-1. e_useStore.ts
│  │  ├─ 5-1. rootReducer.ts
│  │  ├─ 5-2. cards
│  │  │  ├─ 5-2. e_actions.ts
│  │  │  ├─ 5-2. e_reducers.ts
│  │  │  ├─ 5-2. e_types.ts
│  │  │  └─ index.ts
│  │  ├─ 5-2. clock
│  │  │  ├─ 5-2. e_actions.ts
│  │  │  ├─ 5-2. e_reducers.ts
│  │  │  ├─ 5-2. e_types.ts
│  │  │  └─ index.ts
│  │  ├─ 5-2. counter
│  │  │  ├─ 5-2. e_actions.ts
│  │  │  ├─ 5-2. e_reducers.ts
│  │  │  ├─ 5-2. e_types.ts
│  │  │  └─ index.ts
│  │  ├─ 5-2. e_Appstate.ts
│  │  ├─ 5-2. e_rootReducer.ts
│  │  ├─ 5-2. remoteUser
│  │  │  ├─ 5-2. e_actions.ts
│  │  │  ├─ 5-2. e_reducers.ts
│  │  │  ├─ 5-2. e_types.ts
│  │  │  └─ index.ts
│  │  ├─ 5-2. useStore.ts
│  │  ├─ 5-3. errorMessage
│  │  │  ├─ 5-3. actions.ts
│  │  │  ├─ 5-3. generateErrorMessage.ts
│  │  │  ├─ 5-3. reducers.ts
│  │  │  ├─ 5-3. types.ts
│  │  │  └─ index.ts
│  │  ├─ 5-3. e_Appstate.ts
│  │  ├─ 5-3. e_logger.ts
│  │  ├─ 5-3. e_rootReducer.ts
│  │  ├─ 5-3. e_useStore.ts
│  │  ├─ 5-3. fetchUser
│  │  │  ├─ 5-3. e_actions.ts
│  │  │  ├─ 5-3. e_fetch.ts
│  │  │  ├─ 5-3. e_reducers.ts
│  │  │  ├─ 5-3. e_types.ts
│  │  │  └─ index.ts
│  │  ├─ 5-3. loading
│  │  │  ├─ 5-3. actions.ts
│  │  │  ├─ 5-3. doTimeLoading.ts
│  │  │  ├─ 5-3. e_types.ts
│  │  │  ├─ 5-3. reducers.ts
│  │  │  └─ index.ts
│  │  ├─ 5-4. cardEntities
│  │  │  ├─ 5-4. actions.ts
│  │  │  ├─ 5-4. e_reducers.ts
│  │  │  ├─ 5-4. e_types.ts
│  │  │  └─ index.ts
│  │  ├─ 5-4. e_Appstate.ts
│  │  ├─ 5-4. e_commonTypes.ts
│  │  ├─ 5-4. e_rootReducer.ts
│  │  ├─ 5-4. e_useCards.ts
│  │  ├─ 5-4. e_useLists.ts
│  │  ├─ 5-4. e_useStore.ts
│  │  ├─ 5-4. listEntities
│  │  │  ├─ 5-4. actions.ts
│  │  │  ├─ 5-4. e_reducers.ts
│  │  │  ├─ 5-4. e_types.ts
│  │  │  └─ index.ts
│  │  ├─ 5-4. listidCardidOrders
│  │  │  ├─ 5-4. actions.ts
│  │  │  ├─ 5-4. e_types.ts
│  │  │  ├─ 5-4. reducers.ts
│  │  │  └─ index.ts
│  │  ├─ 5-4. listidOrders
│  │  │  ├─ 5-4. actions.ts
│  │  │  ├─ 5-4. e_types.ts
│  │  │  ├─ 5-4. reducers.ts
│  │  │  └─ index.ts
│  │  ├─ copy
│  │  │  ├─ 5-2. actions.ts
│  │  │  ├─ 5-2. reducers.ts
│  │  │  ├─ 5-2. types.ts
│  │  │  └─ index.ts
│  │  └─ index.ts
│  ├─ theme
│  │  └─ daisyui
│  │     ├─ 3-5. Button.tsx
│  │     ├─ 3-5. Icon.tsx
│  │     ├─ 3-5. Input.tsx
│  │     ├─ 3-5. Modal.tsx
│  │     ├─ 4-5. e_ValidatableInput.tsx
│  │     └─ index.ts
│  └─ utils
│     ├─ 4-5. e_imageFileReaderP.ts
│     ├─ 5-4. arrayUtil.ts
│     ├─ 5-4. e_arrayUtil.ts
│     └─ index.ts
├─ tailwind.config.js
└─ tsconfig.json

```