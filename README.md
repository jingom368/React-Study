# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

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