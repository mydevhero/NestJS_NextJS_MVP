"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.3.0",
    "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\n// Aggiunto dallo script setup.sh\n\n/**\n * Rappresenta un utente del sistema.\n */\nmodel User {\n  id       Int      @id @default(autoincrement()) // Serial\n  email    String   @unique\n  nickname String   @unique\n  answers  Answer[]\n}\n\n/**\n * Rappresenta un quiz.\n */\nmodel Quiz {\n  id       Int      @id @default(autoincrement()) // Serial\n  question String\n  options  String[] // Array di stringhe per le 4 opzioni\n\n  // Inserisco direttamente il valore della risposta che deve corrispondere all'elemento di options\n  // correctAnswer String\n  correctAnswer Int // Punta all'id di options con la risposta\n  // ├── corretta\n  explanation   String\n  answers       Answer[] // Array delle risposte\n}\n\n/**\n * Relazione tra Utente e Quiz per tracciare le risposte date.\n */\nmodel Answer {\n  id Int @id @default(autoincrement()) // Serial\n\n  user   User @relation(fields: [userId], references: [id]) // Foreign key\n  userId Int // ├── referenzia la tabella \"User\" al campo \"id\"\n\n  quiz   Quiz @relation(fields: [quizId], references: [id]) // Foreign key\n  quizId Int // ├── referenzia la tabella \"Quiz\" al campo \"id\"\n\n  isCorrect Boolean\n  createdAt DateTime @default(now())\n\n  selectedOption Int?\n  // ├── rispondere due volte allo stesso quiz\n\n  @@unique([userId, quizId]) // Setta una constraint unique che impedisce di\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nickname\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"answers\",\"kind\":\"object\",\"type\":\"Answer\",\"relationName\":\"AnswerToUser\"}],\"dbName\":null},\"Quiz\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"question\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"options\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"correctAnswer\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"explanation\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"answers\",\"kind\":\"object\",\"type\":\"Answer\",\"relationName\":\"AnswerToQuiz\"}],\"dbName\":null},\"Answer\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AnswerToUser\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"quiz\",\"kind\":\"object\",\"type\":\"Quiz\",\"relationName\":\"AnswerToQuiz\"},{\"name\":\"quizId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"isCorrect\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"selectedOption\",\"kind\":\"scalar\",\"type\":\"Int\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => __importStar(require('node:buffer')));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"))),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js")));
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map