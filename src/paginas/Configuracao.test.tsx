import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { Configuracao } from "./Configuracao";
import { useNavigate } from "react-router-dom";

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('a pagina de configuraca', () => {
    test('deve ser renderizada corretamente', () => {

        // teste de snapshot:
        const {container} = render(
            <RecoilRoot>
                <Configuracao/>
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot()
    })
})