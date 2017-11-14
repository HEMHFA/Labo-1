class Task {

    /** Constructeur*/
    /**
     *Instancie une nouvelle tache
     * @param {int} unid - id de la tache
     * @param {string} unLib  - libelle de la tache
     */
    constructor(unId, unLib) {
        this._id = unId;
        this._nom = unLib;
    }
    get nom(){
        return this._nom;
    }
}
module.exports = Task;