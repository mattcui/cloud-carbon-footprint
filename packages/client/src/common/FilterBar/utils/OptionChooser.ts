/*
 * © 2021 Thoughtworks, Inc.
 */

import { DropdownFilterOptions, DropdownOption, FilterOptions } from 'Types'
import { DropdownSelections } from './FiltersUtil'
import {
  ALL_DROPDOWN_FILTER_OPTIONS,
  ALL_KEY,
  CLOUD_PROVIDER_OPTIONS,
} from './DropdownConstants'

export abstract class OptionChooser {
  protected choosers: {
    [option in DropdownFilterOptions]?: () => Set<DropdownOption>
  }

  protected constructor(
    protected readonly filterType: DropdownFilterOptions,
    protected readonly allOptions: DropdownOption[],
    protected selections: DropdownOption[],
    protected readonly oldSelections: DropdownSelections,
    protected readonly filterOptions: FilterOptions,
  ) {}

  choose(): DropdownSelections {
    const selectionKeys: string[] = this.selections.map(
      (selection) => selection.key,
    )
    const oldSelectionKeys: string[] = this.oldSelections[this.filterType].map(
      (oldSelection) => oldSelection.key,
    )

    const allOptionsAreSelected =
      selectionKeys.includes(ALL_KEY) ||
      selectionKeys.length === this.allOptions.length - 1
    const allOptionsWereSelected = oldSelectionKeys.includes(ALL_KEY)
    if (allOptionsAreSelected && !allOptionsWereSelected) {
      this.selections = this.allOptions
    }

    const selectionOptions: string[] = Object.keys(this.oldSelections)

    if (!selectionKeys.includes(ALL_KEY) && allOptionsWereSelected) {
      return Object.fromEntries(selectionOptions.map((option) => [option, []]))
    } else {
      if (
        this.selections.length === this.allOptions.length - 1 &&
        allOptionsWereSelected
      ) {
        this.selections = this.selections.filter((k) => k.key !== ALL_KEY)
      }

      return Object.fromEntries(
        selectionOptions.map((option) => [
          option,
          this.addAllDropDownOptions(
            this.choosers[option](),
            option as DropdownFilterOptions,
          ),
        ]),
      )
    }
  }

  chooseCurrentFilterOption(): Set<DropdownOption> {
    return new Set(this.selections)
  }

  chooseDropdownFilterOption(filterOption: string): Set<DropdownOption> {
    const desiredSelections: Set<DropdownOption> = new Set()
    const filterMatch = filterOption.slice(0, -1)
    this.selections.forEach((selection) => {
      if (selection.key !== ALL_KEY) {
        this.filterOptions[filterOption].forEach((option) => {
          ;(option.key === selection[filterMatch] ||
            option.cloudProvider === selection.key) &&
            desiredSelections.add(option)
        })
      }
    })
    return desiredSelections
  }

  chooseProviders(): Set<DropdownOption> {
    const desiredSelections: Set<DropdownOption> = new Set()
    this.getCloudProvidersFromSelections(this.selections).forEach(
      (cloudProviderOption) => desiredSelections.add(cloudProviderOption),
    )
    return desiredSelections
  }

  getCloudProvidersFromSelections(
    selections: DropdownOption[],
  ): Set<DropdownOption> {
    const cloudProviderSelections: Set<DropdownOption> =
      new Set<DropdownOption>()
    selections.forEach((selection) => {
      if (selection.key !== ALL_KEY) {
        cloudProviderSelections.add(
          <DropdownOption>(
            CLOUD_PROVIDER_OPTIONS.find(
              (option) => option.key === selection.cloudProvider,
            )
          ),
        )
      }
    })
    return cloudProviderSelections
  }

  private addAllDropDownOptions(
    currentSelections: Set<DropdownOption>,
    filterType: DropdownFilterOptions,
  ): DropdownOption[] {
    const revisedSelections: DropdownOption[] = Array.from(currentSelections)
    if (currentSelections.size === this.filterOptions[filterType].length - 1) {
      revisedSelections.unshift(ALL_DROPDOWN_FILTER_OPTIONS[filterType])
    }

    return revisedSelections
  }
}
