const sinon = require( 'sinon' );

const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );


describe( "index.js", () => {
  describe( 'getPosts()', () => {

    beforeEach( () => {
      window.document.body.innerHTML = '<main></main>'
      window.fetch = require( 'node-fetch' );
      chai.spy.on( window, 'fetch' );
    } );

    it( "sends a fetch request to 'https://anapioficeandfire.com/api/books'", async () => {
      await fetchBooks()
      expect( window.fetch, "A fetch to the API was not found" )
        .to.have.been.called.with( 'https://anapioficeandfire.com/api/books' );
    } )
  } )
})
