import CharacterService from '../../services/CharacterService';

export const GeneratePdf = (id) => {
    CharacterService.getExportCharacterById(id)
    .then(response => {
        //Create a Blob from the PDF Stream
            const file = new Blob(
              [response.data],
              {type: 'application/pdf'});
        //Build a URL from the file
            const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
            window.open(fileURL);
        })
        .catch(error => {
            console.log(error);
        });
}
