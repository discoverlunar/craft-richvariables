[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/nystudio107/craft-richvariables/badges/quality-score.png?b=v1)](https://scrutinizer-ci.com/g/nystudio107/craft-richvariables/?branch=v1) [![Code Coverage](https://scrutinizer-ci.com/g/nystudio107/craft-richvariables/badges/coverage.png?b=v1)](https://scrutinizer-ci.com/g/nystudio107/craft-richvariables/?branch=v1) [![Build Status](https://scrutinizer-ci.com/g/nystudio107/craft-richvariables/badges/build.png?b=v1)](https://scrutinizer-ci.com/g/nystudio107/craft-richvariables/build-status/v1) [![Code Intelligence Status](https://scrutinizer-ci.com/g/nystudio107/craft-richvariables/badges/code-intelligence.svg?b=v1)](https://scrutinizer-ci.com/code-intelligence)

# Rich Variables plugin for Craft CMS 3.x

Allows you to easily use Craft Globals as variables in Rich Text fields

![Screenshot](./resources/img/plugin-banner.jpg)

Related: [Rich Variables for Craft 2.x](https://github.com/nystudio107/richvariables)

**Note**: _The license fee for this plugin is $19.00 via the Craft Plugin Store._

## Requirements

This plugin requires Craft CMS 3.0.0 or later.

## Installation

To install Rich Variables, follow these steps:

1. Install with Composer via `composer require nystudio107/craft-richvariables` from your project directory
2. Install the plugin via `./craft install/plugin rich-variables` via the CLI, or in the Control Panel, go to Settings → Plugins and click the “Install” button for Rich Variables.

You can also install Rich Variables via the **Plugin Store** in the Craft Control Panel.

Rich Variables works on Craft 3.x

## Rich Variables Overview

Rich Variables allows you to easily use Craft Globals as variables in Rich Text fields.

For instance, you might have loan rates that appear in the body of multiple Rich Text fields, and maybe even in multiple places in each field. When it comes time to update those loan rates, you can just change them in your Globals set, and they will be automatically updated wherever they are used in your Rich Text fields.

## Configuring Rich Variables

To configure Rich Variables, first you'll need to create a Globals set (if you don't have one already) by clicking on **Settings**→**Globals**:

![Screenshot](./resources/screenshots/richvariables01.png)

You can put any kinds of fields that you want into your Globals set, but Rich Variables only recognizes the following FieldTypes currently: `PlainText`, `RichText`, `Number`, `Date`, `Dropdown`, and `Preparse`.

Next, you need to tell Rich Variables which Globals set (you can have an arbitrary number of them) that it should use. To do this, click on **Settings**→**Rich Variables** and choose your Globals set, then click on **Save**:

![Screenshot](./resources/screenshots/richvariables02.png)

Finally, we'll need to let Redactor (the Craft 2.x Rich Text editor) know that we want to use the Rich Variables plugin. You can do this by editing the Redactor settings in `craft/config/redactor/`. Make sure you edit the settings that your Rich Text fields use to add `richvariables` to the `plugins` array.

For example, here's what my `Standard.json` Redactor settings looks like:

    {
        "buttons": ["format","kbd","bold","italic","lists","link","file","horizontalrule"],
        "plugins": ["source","fullscreen","richvariables"]
    }

Note that `richvariables` was added to the `plugins` array above.

If Rich Variables isn't appearing in your Rich Text fields, it's usually because the Rich Text fields aren't using the Redactor settings where you added `richvariables` to the `plugins` array.

## Using Rich Variables

The setup was the hard part. Using Rich Variables is easy, just go to your Rich Text field, and click on the newly added Rich Variables icon to see a list of your Globals set variables:

![Screenshot](./resources/screenshots/richvariables03.png)

Choose one to insert it into your Rich Text field. You'll see some code-looking stuff inserted, such as `{globalset:737:loanName}` in the example above.

This is actually a [Reference Tag](https://craftcms.com/docs/reference-tags) to the Globals set Element and Field that you chose. 
 
 If you change the values in your Globals set Fields, they will automatically be updated everywhere they are used in your Rich Text fields.

On the frontend, the display of the Rich Text field will also automatically include the Globals set values, and might look something like this:

![Screenshot](./resources/screenshots/richvariables05.png)

The fun thing about the way Rich Variables works is that since it leverages the built-in Craft functionality of [Reference Tags](https://craftcms.com/docs/reference-tags), even if you uninstall the Rich Variables plugin, everything will continue to work.

Nice.

## Miscellanea

To display itself in a tokenized way, Rich Variables wraps the inserted variables in `<ins></ins>` tags. The default styling for these seldom-used tags is `text-decoration: underline;` in many browsers. So for frontend display, you might need to add some CSS to override this if you don't want them underlined.

Redactor can be a little weird with inline styles; this isn't anything specific to Rich Variables. What I typically do is when I want to insert an inline style, I type two spaces, then the left-arrow key, and then I insert my inline style in Redactor. This ensures that there is a space on either side of the inline style, and prevents some formatting headaches.

Brought to you by [nystudio107](https://nystudio107.com)
