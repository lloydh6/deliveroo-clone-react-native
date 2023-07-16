# Runtime error `Use process(css).then(cb) to work with async plugins` for nativewind config

## Description
When adding a className that related to a tailwind/nativewind style I encountered the `Use process(css).then(cb) to work with async plugins` error. 

## Solution
Incompatibility with the latest version of tailwindcss. Downgrade from 3.3.3 to 3.3.2 and now it works fine thanks to [this](https://github.com/marklawlor/nativewind/issues/498#issuecomment-1635038692) comment on a closed ticket 