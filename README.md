## Task: Mini-paint

https://docs.google.com/document/d/1K79_NA4lMYfqQiIJGqLDek1K9z-oc2qg8n4AvrN1PXE/edit

## How to run the app:

To get started, just clone the repository, install packages and run dev server:

    git clone https://github.com/Ischerba32/Innowise-Lab-Internship-Level-2-Mini-paint.git
    npm install
    npm start

## How to build:

If you wanted to build this app, you should run next one script:

    npm run build

Complete bundle will store in "dist" folder

### Database snapshot:

    users: {
        userId: {
          userId: string;
          email: string;
        }
    },
    images: {
      imageId: {
        date: string;
        imageId: string;
        image: string;
        userEmail: string;
        userId: string;
      }
    }

### Directory structure:

    Root folder:
        .husky -- implemented git lifecycle hooks
        public -- application build
        src -- source code directory
          components - components directory
                      (every component directory include
                      index.tsx - component,
                      props.ts - props interface,
                      styles.module.scss - styles)
            AuthForm -- login / signUp form component
            AuthRoute -- auth protected component
            Canvas -- canvas page component
            CanvasMenu -- canvas menu component
            Header -- header component
            Home -- main page
            Images
              ImageItem -- image component
              ImageList -- list images component
            SignIn -- signIn page
            SignUp -- signUp page

            UI -- UI stateless components
              Button
              ButtonIcon
              Card
              CustomSelect
              Htag
              Input
              Loader
              ThemeSwitch
          config - firebase config
          helpers - date handlers
          hooks - custom hooks
          interfaces - application interfaces
            hooks -- hooks interfaces
          redux -- redux store
            sagas -- redux sagas
              imagesSaga
              userSaga
            slices -- redux reducers & actions
          styles - global application styles

### Application stack:

    React
    Redux-toolkit
    Redux-saga
    Typescript
    Firebase (auth, Realtime Database, Storage)
    Sass
    Moment - library for handling dates
    uuid - library for generating unique string id
    React Router DOM - application routing
    React hook form - library for forms handling
    React Toastify - library providing toast component
    Husky - git lifecycle hooks handling
    Classnames - library for classnames handling
    React-select - library for custom select
