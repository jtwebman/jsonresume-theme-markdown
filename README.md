# Basic Markdown theme [![](https://badge.fury.io/js/jsonresume-theme-markdown.png)](https://www.npmjs.com/package/jsonresume-theme-markdown)

This is the basic markdown theme for [JSON Resume](http://jsonresume.org/).

## Getting started

You can preview the markdown generated here:

To get started you will need to install the resume client tool:

```
sudo npm install -g resume-cli
```

Once the resume client is installed you get initialize a new resume.jso file by calling:

```
resume init
```

Go ahead and update you resume.json with all your information.

Once you are done you can test that the format is correct by calling:

```
resume test
```

Next you will need to register with jsonresume.org by calling:

```
resume register
```

The last step is to publish your resume by calling:

```
resume publish
```

Once published you can access the markdown version at the url http://registry.jsonresume.org/{username}?theme=markdown'

* JT's: http://registry.jsonresume.org/jtwebman?theme=markdown
* Example: http://themes.jsonresume.org/markdown


## License

Available under [the MIT license](http://mths.be/mit).
