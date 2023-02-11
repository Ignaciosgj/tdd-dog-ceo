import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DogApp } from "./DogApp";

describe("tests for DogApp", () => {
    it("should render", () => {
        render(<DogApp />);
        expect(screen.getByText("DogApp")).toBeDefined();
    })
})