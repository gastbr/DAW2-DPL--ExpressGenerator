/**
 * @swagger
*components:
*  schemas:
*    Bicicleta:
*      type: object
*      required:
*      - ubicacion
*      properties:
*        id:
*          type: number
*          description: The auto-generated id of the bike
*        color:
*          type: string
*          description: The color of your bike
*        modelo:
*          type: string
*          description: The bike model
*        ubicacion:
*          type: array
*          items:
*            type: number
*          description: Where the bike is located
*      example:
*        id: 1
*        color: red
*        modelo: Trek
*        ubicacion: [ 28.503789, -13.853296 ]
*
 */

/**
 * @swagger
 * tags:
 *   name: Bicicletas
 *   description: The bikes managing API
 * /bicicletas:
 *   get:
 *     summary: Lists all the bikes
 *     tags: [Sin ID]
 *     responses:
 *       200:
 *         description: The list of the bikes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bicicleta'
 *   post:
 *     summary: Create a new bike
 *     tags: [Sin ID]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: The created bike.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 *       500:
 *         description: Error al añadir bicicleta
 * /bicicletas/{id}:
 *   get:
 *     summary: Get the bike by id
 *     tags: [Con ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The bike id
 *     responses:
 *       200:
 *         description: The bike response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 *       404:
 *         description: The bike was not found
 *   put:
 *    summary: Update the bike by the id
 *    tags: [Con ID]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The bike id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Bicicleta'
 *    responses:
 *      200:
 *        description: The bike was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Bicicleta'
 *      404:
 *        description: The bike was not found
 *      500:
 *        description: Error al actualizar la bicicleta
 *   delete:
 *     summary: Remove the bike by id
 *     tags: [Con ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The bike id
 *
 *     responses:
 *       200:
 *         description: The bike was deleted
 *       404:
 *         description: The bike was not found
 */


let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.allBicis = [];

Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

Bicicleta.removeById = function (id) {
    this.allBicis = this.allBicis.filter(bici => bici.id != id);
}

Bicicleta.update = function (bici) {
    Bicicleta.removeById(bici.id);
    Bicicleta.add(bici);
}

let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;