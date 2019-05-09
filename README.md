# `fetch()` Lab

## Learning Goals

- Use `fetch()` to programmatically make a web request

## Introduction

In this lab, we'll be using `fetch()` to send web requests to
the [Game of Thrones][GoT] API. We'll make a web request to the API, and in
return we will receive a collection of data, structured like a nested hash.

![Game of Thrones Come at Me Gif](https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-fetch-lab/got-comeatme.gif)

### What's an API?

An **API**, or application programming interface, is a manner in which companies
and organizations, like Twitter or the New York City government, or the super
fans behind the Game of Thrones API, expose their data and/or functionality to
the public (i.e. talented programmers like yourself) for use. APIs allow us to
add important data and functionality to the applications we build. You can think
of an API as one way in which data is exposed to us developers for use in our
own programs.

Just like we can use JavaScript to send a web request for a web page that is
written in HTML, and receive a response that is full of HTML, we can use
JavaScript to send a web request to an API and receive a collection of JSON in
return.

### What's JSON?

**JSON** is a language-agnostic way of formatting data. If we send a web request
to the Game of Thrones API, it will return to us a JSON collection of data. With
just one easy line of code, we can tell JavaScript to treat that JSON collection
as a nested `Object`. In this way, large and complicated amounts of data can be
shared across platforms.

## Instructions

Getting data from the [Game of Thrones][GoT] API with `fetch()` is a pretty easy
process, as we've seen. If we're just trying to `GET` some JSON, we can add the
following code to our JavaScript console in the browser:

```js
fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => console.log(json));
```

Remember that we can use the `json()` method of the `Body` mixin to render the
API's response as JSON. We then pass the arrow function's result to the _next_
`then()`. Thus in the second `then()` we receive a JSON strong that, when we
pass it to `console.log()` prints a JavaScript object to our console.

The response from the API contains all ten books currently existing in the Game
of Thrones series, in a JSON format.

![Fetch Response from Game of Thrones API](https://curriculum-content.s3.amazonaws.com/web-development/js/ajax/fetch_lab_promises_response.png)

Since we asked for all the books by making a query to the `/books` path, it
gave us all the books.  APIs have many different variations and can be as
customizable as the developer wants them to be. If you're really lucky, there
will be robust documentation to go along with the API to help you out and give
you a road map to help you figure out how to format your request for
information. For now we'll focus on just getting different kinds of information
out of the API's `/books` path.

Play around with the logged response. See if you can design a strategy to take
the logged object to find the following answers. To pass the lab you don't have
to have to encode these strategies.

1. The 5th book in the series
2. The 1031st character in the series
3. The total number of pages of all the books

It's not uncommon for developers who are integrating with third-party APIs to
have to do some exploration of the returned data to find the thing they're
looking for.


## Deliverables

In `index.js`, there is an empty function, `fetchBooks()`, that is called when
`index.html` is loaded. To pass this lab, this function should include a fetch
request to the Game of Thrones API ('https://anapioficeandfire.com/api/books').
The returned response should be converted to JSON. Then, call the second function,
`renderBooks()`, passing in the API's returned JSON data as the argument. To
check if you have done this correctly, open up the index.html page of this lab
and you should see a list of Game Of Thrones titles on your webpage.

**Note**: The tests in this lab need access to the `fetch()` request inside
`fetchBooks()`. In order to give them access, write you solution so that
`fetchBooks()` _returns_ the `fetch()`. This will not change the behavior of
your `fetch()`.

## Conclusion

APIs are powerful tools that can help you leverage the power of the available
data on the web. Once you feel comfortable using the tools that access the data,
the world is your oyster!

![Dancing](https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-fetch-lab/got-dancing.gif)

[GoT]: https://anapioficeandfire.com/
