class bookNotes extends HTMLElement {
    constructor() {
      super();
    }
  

//     <button aria-label="Copy Selection" id="copyBtn" class="pallette-btn">
//     <div class="pallette-text">Copy</div>  CMON GUYSS!!
//    </button> 

    connectedCallback() {
      this.innerHTML = `
  
  
<div id="booknotes-curtain" class="overlay-tc">


   
<div class="overlay-content-tc" style="min-height:80%;">

    <div class="contents-title-box">
        <div class="contents-title">Your Saved</div>
        <div class="contents-books123"><div class="tc-a-book content-button">BOOK NOTES</div></div>
    </div>
    <div id="book-notes-list">




    </div>

        <div style="margin:auto;">
            <button id="reset-settings-bn" onclick="resetBookNotes()" style="width: 200px;margin: 30px auto 20px auto; cursor:pointer; padding:6px;">No Booknotes Saved</button>

            <div id="instructions-bn" style="font-family:Mulish;color:grey;">Welcome to your Booknotes panel!  It looks like you don't have any notes or annotations yet.  When reading, highlight any of the book's content text.  Look for the pop-up panel at the bottom of your screen and choose a color or hoose the pencil to annotate.  Later, click any highlighted text to add additional notes or to copy or generate a citation.</div>
        </div>

        <div id="collaborative-editing" style="width:80%; padding:20px;background:var(--background-color); border-radius: 10px;margin: auto;margin-top:80px;">

        <br></br>
            <h3 style="font-family:Mulish;margin:0px">Collaborative Editing</h3>


        
            <h6 style="margin:16px auto 10px auto;">Booknotes enable authors and editors to work together on the live earthbook.  Export and download your booknotes to share all your highlights and annotations with another reader.</h6>

            <button id="booknotes-download" onclick="downloadBooknotes()" aria-label="Export Booknotes">
            ▼ Export Booknotes
            </button>

            <h6 style="margin: 25px 0px 0px 5px;">Import and upload the Booknotes of another reader to your device to view them.</h6>

            <div id="booknotes-export" style="width:380px; padding:10px;margin: 10px auto 15px auto;background-color:var(--slider);
            border-radius: 10px;width:fit-content;">
            
                <input id="jsonUpload" type="file" id="jsonUpload" accept=".json" aria-label="Choose a Booknotes JSON file">
                 <button id="booknotes-upload-go" onclick="uploadBooknotes()" aria-label="Import Booknotes file">▲ Import Booknotes</button>
            </div>

            <br><br>

            

    </div>

    <!--
    <div class="tc-button-row" style="margin-top:auto;">
        <a href="index.html" style="height: 24px; flex-grow: 1"><div id="tour-btn" class="action-btn" ><i style="background-image: url(../icons/home.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 3px;"></i></div></a>

        <div id="buy-btn" class="action-btn" onclick="closeContents(), guidedTour()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/tour.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i> Tour</div>

        <div id="buy-btn" class="action-btn" onclick="openBuy()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/buy.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i></div>

        <div id="buy-btn" class="action-btn" onclick="openBookplate()" style="height: 22px;flex-grow: 1"><i style="background-image: url(../icons/about.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 5px; cursor:pointer;"></i></div>

        <div id="buy-btn" class="action-btn" onclick="openEco()" style="height: 24px;flex-grow: 1"><i style="background-image: url(../icons/eco-green.svg); width:22px; height:22px;display: inline-block;background-size: 22px;margin-bottom: -3px;margin-right: 0px; cursor:pointer;"></i></div>
        
        
    </div>-->
</div>
</div>

<!-- BOOKNOTES MENU PALLETTE-->

<div id="bookNotePalette" class="palette-hidden">
   <div class="main-pallette-buttons" id="palletteBar">
        <div  class="highlight-buttons">
            <div id="save-text" class="pallette-text">Save:</div>
            <button class="color-btn" onclick="highlightBooknote('green')" style="background:green" aria-label="Highlight Text Green" title="Highlight & Save Green"></button>
            <button class="color-btn" onclick="highlightBooknote('red')" style="background:red" aria-label="Highlight Text Red" title="Highlight & Save Red"></button>
            <button class="color-btn" onclick="highlightBooknote('blue')" style="background:#2daee5" aria-label="Highlight Text Blue" title="Highlight & Save Blue"></button>
        </div>
        
     
        <button aria-label="Add annotation" id="booknotesBtn" class="pallette-btn" onclick="highlightBooknote('yellow')">
            <div class="pallette-text" style="color:yellow">Annotate</div>
        </button>
        <button aria-label="View Your Booknotes" id="viewBooknotesBtn" class="pallette-btn" onclick="updateBNResetButton(),openBooknotes(), bookNotesCreator()">
            <div class="pallette-text">Booknotes</div>
        </button>
    </div>

    <div id="annotationEntry" style="width: 90%;
    margin: 20px auto 20px auto;">
    <textarea id="userAnnotation" placeholder="Add your annotation here..."></textarea>
    <button id="annotate-button" style="padding: 8px 15px;cursor:pointer;margin-right:8px;" onclick="appendAnnotation()">Annotate</button>
    <button id="annotate-cancel" style="padding: 8px 15px;cursor:pointer;"  onclick="cancelAnnotation()">Cancel</button>
    </div>
</div>



<!--HIGHLIGHTER-->


<div id="highlight-viewer" class="modal" style="background:var(--highlight-modal);">
  <div id="quotation-title">Your BookNote &nbsp;<div id="bookNoteID"></div></div>
  <div id="close-x">&times;</div>
  <div class="highlight-viewer-content">

    <div class="quotation-box">

        <div id="the-quote"></div>

    </div>

    <div class="quote-info">
      <span style="font-size:small; color:grey;padding-bottom:10px;">Highlight source:</span>
      <div style="font-size:medium;padding-bottom:10px;">
        <div id="noteChapter"></div>
        <div id="book"></div>

      </div>
        <div id="date" style="font-size:small"></div>
        <div id="charCount" style="font-size:small"></div>
        <div id="publicNote" style="font-size:small"></div>


    </div>
    <textarea id="userNote" class="user-annotation" placeholder="Click to annotate this highlight..."></textarea>

    <button id="saveBtn" aria-label="Save" onclick="appendAnnotation2()">Save Annotation</button>
    <div class="quotation-button-row">
      <button aria-label="Copier la sélection" id="copyBtn" class="quotation-btn" class="pallette-text">Copy
      </button>
      <button id="clearBtn" aria-label="Clear Highlight" class="quotation-btn" >Clear</button>
     <!-- <button id="cancelBtn" aria-label="Cancel" class="pallette-btn">Cancel</button>-->
      <button id="citeBtn" aria-label="Cite" class="quotation-btn">Cite</button>
    </div>
  </div>
  </div>



      
      `;
  }
  }
  
  customElements.define('booknotes-curtain', bookNotes);
  
  
  