import React from "react";
import * as Stories from "../Input.stories";
import {userEvent, waitFor} from "@storybook/testing-library";
import {act, render, screen} from "@testing-library/react";
import {composeStories} from "@storybook/testing-react";

const {Required} = composeStories(Stories);

describe('Form - Input', function () {
    test("Doit afficher le message d'erreur de validation par défaut de l'input Quand le champ est vide avec une contrainte required", async function () {
        render(<Required/>);

        const inputText = screen.getByTestId<HTMLInputElement>('test');
        const errorMessage = screen.getByRole('alert');

        act(() => {
            inputText.reportValidity();
        })

        await waitFor(() => expect(errorMessage.textContent).toEqual(inputText.validationMessage));
    });
    test("Doit afficher le message d'erreur de validation de l'input Quand le champ est vide avec une contrainte required", async function () {
        render(<Required/>);

        const inputText = screen.getByTestId<HTMLInputElement>('test');
        const errorMessage = screen.getByRole('alert');

        act(() => {
            inputText.reportValidity();
        })

        await waitFor(() => expect(errorMessage.textContent).toBeDefined());
    });
    test('Doit avoir la propriété aria-invalid à true Quand le champ Required est valid', async function () {
        render(<Required/>);

        const inputText = screen.getByTestId<HTMLInputElement>('test');

        act(() => {
            inputText.reportValidity();
        })

        await waitFor(() => expect(inputText.getAttribute('aria-invalid')).toEqual('true'));
    });
    test('Doit avoir la propriété aria-invalid à false Quand le champ Required est valid', async function () {
        render(<Required/>);

        const inputText = screen.getByTestId<HTMLInputElement>('test');

        act(() => {
            inputText.reportValidity();
        })

        userEvent.type(inputText, 'staniret');

        await waitFor(() => expect(inputText.getAttribute('aria-invalid')).toEqual('false'));
    });
});