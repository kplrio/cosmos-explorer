import React from "react";
import { shallow } from "enzyme";
import { SmartUiComponent, Descriptor, InputType } from "./SmartUiComponent";

describe("SmartUiComponent", () => {
  const exampleData: Descriptor = {
    onSubmit: async (currentValues: Map<string, InputType>) => {},
    root: {
      id: "root",
      info: {
        message: "Start at $24/mo per database",
        link: {
          href: "https://aka.ms/azure-cosmos-db-pricing",
          text: "More Details"
        }
      },
      children: [
        {
          id: "throughput",
          input: {
            label: "Throughput (input)",
            dataFieldName: "throughput",
            type: "number",
            min: 400,
            max: 500,
            step: 10,
            defaultValue: 400,
            inputType: "spin",
            onChange: undefined
          }
        },
        {
          id: "throughput2",
          input: {
            label: "Throughput (Slider)",
            dataFieldName: "throughput2",
            type: "number",
            min: 400,
            max: 500,
            step: 10,
            defaultValue: 400,
            inputType: "slider",
            onChange: undefined
          }
        },
        {
          id: "containerId",
          input: {
            label: "Container id",
            dataFieldName: "containerId",
            type: "string",
            onChange: undefined
          }
        },
        {
          id: "analyticalStore",
          input: {
            label: "Analytical Store",
            trueLabel: "Enabled",
            falseLabel: "Disabled",
            defaultValue: true,
            dataFieldName: "analyticalStore",
            type: "boolean",
            onChange: undefined
          }
        },
        {
          id: "database",
          input: {
            label: "Database",
            dataFieldName: "database",
            type: "object",
            choices: [
              { label: "Database 1", key: "db1", value: "database1" },
              { label: "Database 2", key: "db2", value: "database2" },
              { label: "Database 3", key: "db3", value: "database3" }
            ],
            onChange: undefined,
            defaultKey: "db2"
          }
        }
      ]
    }
  };

  it("should render", () => {
    const wrapper = shallow(<SmartUiComponent descriptor={exampleData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
