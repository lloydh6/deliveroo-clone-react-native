# Issue with Tailwind CSS not applying styles to components

## Description
I had an issue with nativewind and tailwind not working when applying a className to a component. This happened when using a custom project name only. So `npx create-expo-app my-app` worked fine but `npx create-expo-app deliveroo-clone-react-native` did not.

## Solution
For whatever reason, I had to create a my-app npx expo project and after installing the 2 packages it worked as described in the docs. I did not want my-app to be the name of the project so I renamed the directory in finder which broke nativewind and once again the styles were not applied.

The solution to this was to update the app.json file to the new directory name and it began to work.

`
    "name": "deliveroo-clone-react-native",
    "slug": "deliveroo-clone-react-native",
`

I also updated the package.json file to the new directory name for completeness.

`
    "name": "deliveroo-clone-react-native",
`