UBNA domain in-app icons
========================

Expected layout (flat — not nested icons/):

  logo-128.png   (required for login · left rail)
  logo-64.png, logo-login.png, logo.png, logo.svg  (optional)

If you unzip icon-converter with nested icons/ubna/icons/*, run:

  yarn normalize:icons

Build (prebuild) auto-flattens ubna/icons/* → ubna/* before webpack copy.

Tab favicon + PWA install: public/icons/ root only.

GHA: VITE_BV_ICON_FOLDER=ubna  (or VITE_ERP_ICON_FOLDER)

Runtime: /icons/ubna/logo-128.png via window.__LINM_SHELL_BRANDING__.icon
