export const appSelectorDomains = [
	'',
	'activityBar',
	'activityBarBadge',
	'activityBarItem',
	'badge',
	'banner',
	'breadcrumb',
	'breadcrumbPicker',
	'button',
	'charts',
	'checkbox',
	'commandCenter',
	'debugConsole',
	'debugConsoleInputIcon',
	'debugExceptionWidget',
	'debugIcon',
	'debugTokenExpression',
	'debugToolBar',
	'debugView',
	'diffEditor',
	'diffEditorGutter',
	'diffEditorOverview',
	'dropdown',
	'editor',
	'editorBracketHighlight',
	'editorBracketMatch',
	'editorBracketPairGuide',
	'editorCodeLens',
	'editorCommentsWidget',
	'editorCursor',
	'editorError',
	'editorGhostText',
	'editorGroup',
	'editorGroupHeader',
	'editorGutter',
	'editorHint',
	'editorHoverWidget',
	'editorIndentGuide',
	'editorInfo',
	'editorInlayHint',
	'editorLightBulb',
	'editorLightBulbAutoFix',
	'editorLineNumber',
	'editorLink',
	'editorMarkerNavigation',
	'editorMarkerNavigationError',
	'editorMarkerNavigationInfo',
	'editorMarkerNavigationWarning',
	'editorOverviewRuler',
	'editorPane',
	'editorRuler',
	'editorStickyScroll',
	'editorStickyScrollHover',
	'editorSuggestWidget',
	'editorSuggestWidgetStatus',
	'editorUnicodeHighlight',
	'editorUnnecessaryCode',
	'editorWarning',
	'editorWhitespace',
	'editorWidget',
	'extensionBadge',
	'extensionButton',
	'extensionIcon',
	'gitDecoration',
	'icon',
	'input',
	'inputOption',
	'inputValidation',
	'keybindingLabel',
	'keybindingTable',
	'list',
	'listFilterWidget',
	'menu',
	'menubar',
	'merge',
	'mergeEditor',
	'minimap',
	'minimapGutter',
	'minimapSlider',
	'notebook',
	'notebookScrollbarSlider',
	'notebookStatusErrorIcon',
	'notebookStatusRunningIcon',
	'notebookStatusSuccessIcon',
	'notificationCenter',
	'notificationCenterHeader',
	'notificationLink',
	'notificationToast',
	'notifications',
	'notificationsErrorIcon',
	'notificationsInfoIcon',
	'notificationsWarningIcon',
	'panel',
	'panelInput',
	'panelSection',
	'panelSectionHeader',
	'panelTitle',
	'peekView',
	'peekViewEditor',
	'peekViewEditorGutter',
	'peekViewResult',
	'peekViewTitle',
	'peekViewTitleDescription',
	'peekViewTitleLabel',
	'pickerGroup',
	'ports',
	'problemsErrorIcon',
	'problemsInfoIcon',
	'problemsWarningIcon',
	'progressBar',
	'quickInput',
	'quickInputList',
	'quickInputTitle',
	'sash',
	'scm',
	'scrollbar',
	'scrollbarSlider',
	'searchEditor',
	'selection',
	'settings',
	'sideBar',
	'sideBarSectionHeader',
	'sideBarTitle',
	'sideBySideEditor',
	'statusBar',
	'statusBarItem',
	'symbolIcon',
	'tab',
	'terminal',
	'terminalCommandDecoration',
	'terminalCursor',
	'terminalOverviewRuler',
	'testing',
	'textBlockQuote',
	'textCodeBlock',
	'textLink',
	'textPreformat',
	'textSeparator',
	'titleBar',
	'toolbar',
	'tree',
	'walkThrough',
	'walkthrough',
	'welcomePage',
	'widget',
	'window',
] as const;
export const appSelectors = [
	'activityBar.activeBackground',
	'activityBar.activeBorder',
	'activityBar.activeFocusBorder',
	'activityBar.background',
	'activityBar.border',
	'activityBar.dropBorder',
	'activityBar.foreground',
	'activityBar.inactiveForeground',
	'activityBarBadge.background',
	'activityBarBadge.foreground',
	'activityBarItem.profilesBackground',
	'activityBarItem.profilesForeground',
	'activityBarItem.profilesHoverForeground',
	'badge.background',
	'badge.foreground',
	'banner.background',
	'banner.foreground',
	'banner.iconForeground',
	'breadcrumb.activeSelectionForeground',
	'breadcrumb.background',
	'breadcrumb.focusForeground',
	'breadcrumb.foreground',
	'breadcrumbPicker.background',
	'button.background',
	'button.border',
	'button.foreground',
	'button.hoverBackground',
	'button.secondaryBackground',
	'button.secondaryForeground',
	'button.secondaryHoverBackground',
	'button.separator',
	'charts.blue',
	'charts.foreground',
	'charts.green',
	'charts.lines',
	'charts.orange',
	'charts.purple',
	'charts.red',
	'charts.yellow',
	'checkbox.background',
	'checkbox.border',
	'checkbox.foreground',
	'checkbox.selectBackground',
	'checkbox.selectBorder',
	'commandCenter.activeBackground',
	'commandCenter.activeBorder',
	'commandCenter.activeForeground',
	'commandCenter.background',
	'commandCenter.border',
	'commandCenter.foreground',
	'commandCenter.inactiveBorder',
	'commandCenter.inactiveForeground',
	'contrastActiveBorder',
	'contrastBorder',
	'debugConsole.errorForeground',
	'debugConsole.infoForeground',
	'debugConsole.sourceForeground',
	'debugConsole.warningForeground',
	'debugConsoleInputIcon.foreground',
	'debugExceptionWidget.background',
	'debugExceptionWidget.border',
	'debugIcon.breakpointCurrentStackframeForeground',
	'debugIcon.breakpointDisabledForeground',
	'debugIcon.breakpointForeground',
	'debugIcon.breakpointStackframeForeground',
	'debugIcon.breakpointUnverifiedForeground',
	'debugIcon.continueForeground',
	'debugIcon.disconnectForeground',
	'debugIcon.pauseForeground',
	'debugIcon.restartForeground',
	'debugIcon.startForeground',
	'debugIcon.stepBackForeground',
	'debugIcon.stepIntoForeground',
	'debugIcon.stepOutForeground',
	'debugIcon.stepOverForeground',
	'debugIcon.stopForeground',
	'debugTokenExpression.boolean',
	'debugTokenExpression.error',
	'debugTokenExpression.name',
	'debugTokenExpression.number',
	'debugTokenExpression.string',
	'debugTokenExpression.value',
	'debugToolBar.background',
	'debugToolBar.border',
	'debugView.exceptionLabelBackground',
	'debugView.exceptionLabelForeground',
	'debugView.stateLabelBackground',
	'debugView.stateLabelForeground',
	'debugView.valueChangedHighlight',
	'descriptionForeground',
	'diffEditor.border',
	'diffEditor.diagonalFill',
	'diffEditor.insertedLineBackground',
	'diffEditor.insertedTextBackground',
	'diffEditor.insertedTextBorder',
	'diffEditor.removedLineBackground',
	'diffEditor.removedTextBackground',
	'diffEditor.removedTextBorder',
	'diffEditorGutter.insertedLineBackground',
	'diffEditorGutter.removedLineBackground',
	'diffEditorOverview.insertedForeground',
	'diffEditorOverview.removedForeground',
	'disabledForeground',
	'dropdown.background',
	'dropdown.border',
	'dropdown.foreground',
	'dropdown.listBackground',
	'editor.background',
	'editor.findMatchBackground',
	'editor.findMatchBorder',
	'editor.findMatchHighlightBackground',
	'editor.findMatchHighlightBorder',
	'editor.findRangeHighlightBackground',
	'editor.findRangeHighlightBorder',
	'editor.focusedStackFrameHighlightBackground',
	'editor.foldBackground',
	'editor.foreground',
	'editor.hoverHighlightBackground',
	'editor.inactiveSelectionBackground',
	'editor.inlineValuesBackground',
	'editor.inlineValuesForeground',
	'editor.lineHighlightBackground',
	'editor.lineHighlightBorder',
	'editor.linkedEditingBackground',
	'editor.rangeHighlightBackground',
	'editor.rangeHighlightBorder',
	'editor.selectionBackground',
	'editor.selectionForeground',
	'editor.selectionHighlightBackground',
	'editor.selectionHighlightBorder',
	'editor.snippetFinalTabstopHighlightBackground',
	'editor.snippetFinalTabstopHighlightBorder',
	'editor.snippetTabstopHighlightBackground',
	'editor.snippetTabstopHighlightBorder',
	'editor.stackFrameHighlightBackground',
	'editor.symbolHighlightBackground',
	'editor.symbolHighlightBorder',
	'editor.wordHighlightBackground',
	'editor.wordHighlightBorder',
	'editor.wordHighlightStrongBackground',
	'editor.wordHighlightStrongBorder',
	'editorBracketHighlight.foreground1',
	'editorBracketHighlight.foreground2',
	'editorBracketHighlight.foreground3',
	'editorBracketHighlight.foreground4',
	'editorBracketHighlight.foreground5',
	'editorBracketHighlight.foreground6',
	'editorBracketHighlight.unexpectedBracket.foreground',
	'editorBracketMatch.background',
	'editorBracketMatch.border',
	'editorBracketPairGuide.activeBackground1',
	'editorBracketPairGuide.activeBackground2',
	'editorBracketPairGuide.activeBackground3',
	'editorBracketPairGuide.activeBackground4',
	'editorBracketPairGuide.activeBackground5',
	'editorBracketPairGuide.activeBackground6',
	'editorBracketPairGuide.background1',
	'editorBracketPairGuide.background2',
	'editorBracketPairGuide.background3',
	'editorBracketPairGuide.background4',
	'editorBracketPairGuide.background5',
	'editorBracketPairGuide.background6',
	'editorCodeLens.foreground',
	'editorCommentsWidget.rangeActiveBackground',
	'editorCommentsWidget.rangeActiveBorder',
	'editorCommentsWidget.rangeBackground',
	'editorCommentsWidget.rangeBorder',
	'editorCommentsWidget.resolvedBorder',
	'editorCommentsWidget.unresolvedBorder',
	'editorCursor.background',
	'editorCursor.foreground',
	'editorError.background',
	'editorError.border',
	'editorError.foreground',
	'editorGhostText.background',
	'editorGhostText.border',
	'editorGhostText.foreground',
	'editorGroup.border',
	'editorGroup.dropBackground',
	'editorGroup.dropIntoPromptBackground',
	'editorGroup.dropIntoPromptBorder',
	'editorGroup.dropIntoPromptForeground',
	'editorGroup.emptyBackground',
	'editorGroup.focusedEmptyBorder',
	'editorGroupHeader.border',
	'editorGroupHeader.noTabsBackground',
	'editorGroupHeader.tabsBackground',
	'editorGroupHeader.tabsBorder',
	'editorGutter.addedBackground',
	'editorGutter.background',
	'editorGutter.commentRangeForeground',
	'editorGutter.deletedBackground',
	'editorGutter.foldingControlForeground',
	'editorGutter.modifiedBackground',
	'editorHint.border',
	'editorHint.foreground',
	'editorHoverWidget.background',
	'editorHoverWidget.border',
	'editorHoverWidget.foreground',
	'editorHoverWidget.highlightForeground',
	'editorHoverWidget.statusBarBackground',
	'editorIndentGuide.activeBackground',
	'editorIndentGuide.background',
	'editorInfo.background',
	'editorInfo.border',
	'editorInfo.foreground',
	'editorInlayHint.background',
	'editorInlayHint.foreground',
	'editorInlayHint.parameterBackground',
	'editorInlayHint.parameterForeground',
	'editorInlayHint.typeBackground',
	'editorInlayHint.typeForeground',
	'editorLightBulb.foreground',
	'editorLightBulbAutoFix.foreground',
	'editorLineNumber.activeForeground',
	'editorLineNumber.foreground',
	'editorLink.activeForeground',
	'editorMarkerNavigation.background',
	'editorMarkerNavigationError.background',
	'editorMarkerNavigationError.headerBackground',
	'editorMarkerNavigationInfo.background',
	'editorMarkerNavigationInfo.headerBackground',
	'editorMarkerNavigationWarning.background',
	'editorMarkerNavigationWarning.headerBackground',
	'editorOverviewRuler.addedForeground',
	'editorOverviewRuler.background',
	'editorOverviewRuler.border',
	'editorOverviewRuler.bracketMatchForeground',
	'editorOverviewRuler.commonContentForeground',
	'editorOverviewRuler.currentContentForeground',
	'editorOverviewRuler.deletedForeground',
	'editorOverviewRuler.errorForeground',
	'editorOverviewRuler.findMatchForeground',
	'editorOverviewRuler.incomingContentForeground',
	'editorOverviewRuler.infoForeground',
	'editorOverviewRuler.modifiedForeground',
	'editorOverviewRuler.rangeHighlightForeground',
	'editorOverviewRuler.selectionHighlightForeground',
	'editorOverviewRuler.warningForeground',
	'editorOverviewRuler.wordHighlightForeground',
	'editorOverviewRuler.wordHighlightStrongForeground',
	'editorPane.background',
	'editorRuler.foreground',
	'editorStickyScroll.background',
	'editorStickyScrollHover.background',
	'editorSuggestWidget.background',
	'editorSuggestWidget.border',
	'editorSuggestWidget.focusHighlightForeground',
	'editorSuggestWidget.foreground',
	'editorSuggestWidget.highlightForeground',
	'editorSuggestWidget.selectedBackground',
	'editorSuggestWidget.selectedForeground',
	'editorSuggestWidget.selectedIconForeground',
	'editorSuggestWidgetStatus.foreground',
	'editorUnicodeHighlight.background',
	'editorUnicodeHighlight.border',
	'editorUnnecessaryCode.border',
	'editorUnnecessaryCode.opacity',
	'editorWarning.background',
	'editorWarning.border',
	'editorWarning.foreground',
	'editorWhitespace.foreground',
	'editorWidget.background',
	'editorWidget.border',
	'editorWidget.foreground',
	'editorWidget.resizeBorder',
	'errorForeground',
	'extensionBadge.remoteBackground',
	'extensionBadge.remoteForeground',
	'extensionButton.background',
	'extensionButton.foreground',
	'extensionButton.hoverBackground',
	'extensionButton.prominentBackground',
	'extensionButton.prominentForeground',
	'extensionButton.prominentHoverBackground',
	'extensionButton.separator',
	'extensionIcon.preReleaseForeground',
	'extensionIcon.sponsorForeground',
	'extensionIcon.starForeground',
	'extensionIcon.verifiedForeground',
	'focusBorder',
	'foreground',
	'gitDecoration.addedResourceForeground',
	'gitDecoration.conflictingResourceForeground',
	'gitDecoration.deletedResourceForeground',
	'gitDecoration.ignoredResourceForeground',
	'gitDecoration.modifiedResourceForeground',
	'gitDecoration.renamedResourceForeground',
	'gitDecoration.stageDeletedResourceForeground',
	'gitDecoration.stageModifiedResourceForeground',
	'gitDecoration.submoduleResourceForeground',
	'gitDecoration.untrackedResourceForeground',
	'icon.foreground',
	'input.background',
	'input.border',
	'input.foreground',
	'input.placeholderForeground',
	'inputOption.activeBackground',
	'inputOption.activeBorder',
	'inputOption.activeForeground',
	'inputOption.hoverBackground',
	'inputValidation.errorBackground',
	'inputValidation.errorBorder',
	'inputValidation.errorForeground',
	'inputValidation.infoBackground',
	'inputValidation.infoBorder',
	'inputValidation.infoForeground',
	'inputValidation.warningBackground',
	'inputValidation.warningBorder',
	'inputValidation.warningForeground',
	'keybindingLabel.background',
	'keybindingLabel.border',
	'keybindingLabel.bottomBorder',
	'keybindingLabel.foreground',
	'keybindingTable.headerBackground',
	'keybindingTable.rowsBackground',
	'list.activeSelectionBackground',
	'list.activeSelectionForeground',
	'list.activeSelectionIconForeground',
	'list.deemphasizedForeground',
	'list.dropBackground',
	'list.errorForeground',
	'list.filterMatchBackground',
	'list.filterMatchBorder',
	'list.focusAndSelectionOutline',
	'list.focusBackground',
	'list.focusForeground',
	'list.focusHighlightForeground',
	'list.focusOutline',
	'list.highlightForeground',
	'list.hoverBackground',
	'list.hoverForeground',
	'list.inactiveFocusBackground',
	'list.inactiveFocusOutline',
	'list.inactiveSelectionBackground',
	'list.inactiveSelectionForeground',
	'list.inactiveSelectionIconForeground',
	'list.invalidItemForeground',
	'list.warningForeground',
	'listFilterWidget.background',
	'listFilterWidget.noMatchesOutline',
	'listFilterWidget.outline',
	'listFilterWidget.shadow',
	'menu.background',
	'menu.border',
	'menu.foreground',
	'menu.selectionBackground',
	'menu.selectionBorder',
	'menu.selectionForeground',
	'menu.separatorBackground',
	'menubar.selectionBackground',
	'menubar.selectionBorder',
	'menubar.selectionForeground',
	'merge.border',
	'merge.commonContentBackground',
	'merge.commonHeaderBackground',
	'merge.currentContentBackground',
	'merge.currentHeaderBackground',
	'merge.incomingContentBackground',
	'merge.incomingHeaderBackground',
	'mergeEditor.change.background',
	'mergeEditor.change.word.background',
	'mergeEditor.changeBase.background',
	'mergeEditor.changeBase.word.background',
	'mergeEditor.conflict.handled.minimapOverViewRuler',
	'mergeEditor.conflict.handledFocused.border',
	'mergeEditor.conflict.handledUnfocused.border',
	'mergeEditor.conflict.input1.background',
	'mergeEditor.conflict.input2.background',
	'mergeEditor.conflict.unhandled.minimapOverViewRuler',
	'mergeEditor.conflict.unhandledFocused.border',
	'mergeEditor.conflict.unhandledUnfocused.border',
	'mergeEditor.conflictingLines.background',
	'minimap.background',
	'minimap.errorHighlight',
	'minimap.findMatchHighlight',
	'minimap.foregroundOpacity',
	'minimap.selectionHighlight',
	'minimap.selectionOccurrenceHighlight',
	'minimap.warningHighlight',
	'minimapGutter.addedBackground',
	'minimapGutter.deletedBackground',
	'minimapGutter.modifiedBackground',
	'minimapSlider.activeBackground',
	'minimapSlider.background',
	'minimapSlider.hoverBackground',
	'notebook.cellBorderColor',
	'notebook.cellEditorBackground',
	'notebook.cellHoverBackground',
	'notebook.cellInsertionIndicator',
	'notebook.cellStatusBarItemHoverBackground',
	'notebook.cellToolbarSeparator',
	'notebook.editorBackground',
	'notebook.focusedCellBackground',
	'notebook.focusedCellBorder',
	'notebook.focusedEditorBorder',
	'notebook.inactiveFocusedCellBorder',
	'notebook.inactiveSelectedCellBorder',
	'notebook.outputContainerBackgroundColor',
	'notebook.outputContainerBorderColor',
	'notebook.selectedCellBackground',
	'notebook.selectedCellBorder',
	'notebook.symbolHighlightBackground',
	'notebookScrollbarSlider.activeBackground',
	'notebookScrollbarSlider.background',
	'notebookScrollbarSlider.hoverBackground',
	'notebookStatusErrorIcon.foreground',
	'notebookStatusRunningIcon.foreground',
	'notebookStatusSuccessIcon.foreground',
	'notificationCenter.border',
	'notificationCenterHeader.background',
	'notificationCenterHeader.foreground',
	'notificationLink.foreground',
	'notificationToast.border',
	'notifications.background',
	'notifications.border',
	'notifications.foreground',
	'notificationsErrorIcon.foreground',
	'notificationsInfoIcon.foreground',
	'notificationsWarningIcon.foreground',
	'panel.background',
	'panel.border',
	'panel.dropBorder',
	'panelInput.border',
	'panelSection.border',
	'panelSection.dropBackground',
	'panelSectionHeader.background',
	'panelSectionHeader.border',
	'panelSectionHeader.foreground',
	'panelTitle.activeBorder',
	'panelTitle.activeForeground',
	'panelTitle.inactiveForeground',
	'peekView.border',
	'peekViewEditor.background',
	'peekViewEditor.matchHighlightBackground',
	'peekViewEditor.matchHighlightBorder',
	'peekViewEditorGutter.background',
	'peekViewResult.background',
	'peekViewResult.fileForeground',
	'peekViewResult.lineForeground',
	'peekViewResult.matchHighlightBackground',
	'peekViewResult.selectionBackground',
	'peekViewResult.selectionForeground',
	'peekViewTitle.background',
	'peekViewTitleDescription.foreground',
	'peekViewTitleLabel.foreground',
	'pickerGroup.border',
	'pickerGroup.foreground',
	'ports.iconRunningProcessForeground',
	'problemsErrorIcon.foreground',
	'problemsInfoIcon.foreground',
	'problemsWarningIcon.foreground',
	'progressBar.background',
	'quickInput.background',
	'quickInput.foreground',
	'quickInputList.focusBackground',
	'quickInputList.focusForeground',
	'quickInputList.focusIconForeground',
	'quickInputTitle.background',
	'sash.hoverBorder',
	'scm.providerBorder',
	'scrollbar.shadow',
	'scrollbarSlider.activeBackground',
	'scrollbarSlider.background',
	'scrollbarSlider.hoverBackground',
	'searchEditor.findMatchBackground',
	'searchEditor.findMatchBorder',
	'searchEditor.textInputBorder',
	'selection.background',
	'settings.checkboxBackground',
	'settings.checkboxBorder',
	'settings.checkboxForeground',
	'settings.dropdownBackground',
	'settings.dropdownBorder',
	'settings.dropdownForeground',
	'settings.dropdownListBorder',
	'settings.focusedRowBackground',
	'settings.focusedRowBorder',
	'settings.headerBorder',
	'settings.headerForeground',
	'settings.modifiedItemIndicator',
	'settings.numberInputBackground',
	'settings.numberInputBorder',
	'settings.numberInputForeground',
	'settings.rowHoverBackground',
	'settings.sashBorder',
	'settings.textInputBackground',
	'settings.textInputBorder',
	'settings.textInputForeground',
	'sideBar.background',
	'sideBar.border',
	'sideBar.dropBackground',
	'sideBar.foreground',
	'sideBarSectionHeader.background',
	'sideBarSectionHeader.border',
	'sideBarSectionHeader.foreground',
	'sideBarTitle.foreground',
	'sideBySideEditor.horizontalBorder',
	'sideBySideEditor.verticalBorder',
	'statusBar.background',
	'statusBar.border',
	'statusBar.debuggingBackground',
	'statusBar.debuggingBorder',
	'statusBar.debuggingForeground',
	'statusBar.focusBorder',
	'statusBar.foreground',
	'statusBar.noFolderBackground',
	'statusBar.noFolderBorder',
	'statusBar.noFolderForeground',
	'statusBarItem.activeBackground',
	'statusBarItem.compactHoverBackground',
	'statusBarItem.errorBackground',
	'statusBarItem.errorForeground',
	'statusBarItem.focusBorder',
	'statusBarItem.hoverBackground',
	'statusBarItem.prominentBackground',
	'statusBarItem.prominentForeground',
	'statusBarItem.prominentHoverBackground',
	'statusBarItem.remoteBackground',
	'statusBarItem.remoteForeground',
	'statusBarItem.warningBackground',
	'statusBarItem.warningForeground',
	'symbolIcon.arrayForeground',
	'symbolIcon.booleanForeground',
	'symbolIcon.classForeground',
	'symbolIcon.colorForeground',
	'symbolIcon.constantForeground',
	'symbolIcon.constructorForeground',
	'symbolIcon.enumeratorForeground',
	'symbolIcon.enumeratorMemberForeground',
	'symbolIcon.eventForeground',
	'symbolIcon.fieldForeground',
	'symbolIcon.fileForeground',
	'symbolIcon.folderForeground',
	'symbolIcon.functionForeground',
	'symbolIcon.interfaceForeground',
	'symbolIcon.keyForeground',
	'symbolIcon.keywordForeground',
	'symbolIcon.methodForeground',
	'symbolIcon.moduleForeground',
	'symbolIcon.namespaceForeground',
	'symbolIcon.nullForeground',
	'symbolIcon.numberForeground',
	'symbolIcon.objectForeground',
	'symbolIcon.operatorForeground',
	'symbolIcon.packageForeground',
	'symbolIcon.propertyForeground',
	'symbolIcon.referenceForeground',
	'symbolIcon.snippetForeground',
	'symbolIcon.stringForeground',
	'symbolIcon.structForeground',
	'symbolIcon.textForeground',
	'symbolIcon.typeParameterForeground',
	'symbolIcon.unitForeground',
	'symbolIcon.variableForeground',
	'tab.activeBackground',
	'tab.activeBorder',
	'tab.activeBorderTop',
	'tab.activeForeground',
	'tab.activeModifiedBorder',
	'tab.border',
	'tab.hoverBackground',
	'tab.hoverBorder',
	'tab.hoverForeground',
	'tab.inactiveBackground',
	'tab.inactiveForeground',
	'tab.inactiveModifiedBorder',
	'tab.lastPinnedBorder',
	'tab.unfocusedActiveBackground',
	'tab.unfocusedActiveBorder',
	'tab.unfocusedActiveBorderTop',
	'tab.unfocusedActiveForeground',
	'tab.unfocusedActiveModifiedBorder',
	'tab.unfocusedHoverBackground',
	'tab.unfocusedHoverBorder',
	'tab.unfocusedHoverForeground',
	'tab.unfocusedInactiveBackground',
	'tab.unfocusedInactiveForeground',
	'tab.unfocusedInactiveModifiedBorder',
	'terminal.ansiBlack',
	'terminal.ansiBlue',
	'terminal.ansiBrightBlack',
	'terminal.ansiBrightBlue',
	'terminal.ansiBrightCyan',
	'terminal.ansiBrightGreen',
	'terminal.ansiBrightMagenta',
	'terminal.ansiBrightRed',
	'terminal.ansiBrightWhite',
	'terminal.ansiBrightYellow',
	'terminal.ansiCyan',
	'terminal.ansiGreen',
	'terminal.ansiMagenta',
	'terminal.ansiRed',
	'terminal.ansiWhite',
	'terminal.ansiYellow',
	'terminal.background',
	'terminal.border',
	'terminal.dropBackground',
	'terminal.findMatchBackground',
	'terminal.findMatchBorder',
	'terminal.findMatchHighlightBackground',
	'terminal.findMatchHighlightBorder',
	'terminal.foreground',
	'terminal.inactiveSelectionBackground',
	'terminal.selectionBackground',
	'terminal.selectionForeground',
	'terminal.tab.activeBorder',
	'terminalCommandDecoration.defaultBackground',
	'terminalCommandDecoration.errorBackground',
	'terminalCommandDecoration.successBackground',
	'terminalCursor.background',
	'terminalCursor.foreground',
	'terminalOverviewRuler.cursorForeground',
	'terminalOverviewRuler.findMatchForeground',
	'testing.iconErrored',
	'testing.iconFailed',
	'testing.iconPassed',
	'testing.iconQueued',
	'testing.iconSkipped',
	'testing.iconUnset',
	'testing.message.error.decorationForeground',
	'testing.message.error.lineBackground',
	'testing.message.info.decorationForeground',
	'testing.message.info.lineBackground',
	'testing.peekBorder',
	'testing.peekHeaderBackground',
	'testing.runAction',
	'textBlockQuote.background',
	'textBlockQuote.border',
	'textCodeBlock.background',
	'textLink.activeForeground',
	'textLink.foreground',
	'textPreformat.foreground',
	'textSeparator.foreground',
	'titleBar.activeBackground',
	'titleBar.activeForeground',
	'titleBar.border',
	'titleBar.inactiveBackground',
	'titleBar.inactiveForeground',
	'toolbar.activeBackground',
	'toolbar.hoverBackground',
	'toolbar.hoverOutline',
	'tree.indentGuidesStroke',
	'tree.tableColumnsBorder',
	'tree.tableOddRowsBackground',
	'walkThrough.embeddedEditorBackground',
	'walkthrough.stepTitle.foreground',
	'welcomePage.background',
	'welcomePage.progress.background',
	'welcomePage.progress.foreground',
	'welcomePage.tileBackground',
	'welcomePage.tileBorder',
	'welcomePage.tileHoverBackground',
	'widget.shadow',
	'window.activeBorder',
	'window.inactiveBorder',
] as const;
export const appSelectorDomainParts = [
	'activity',
	'auto',
	'badge',
	'banner',
	'bar',
	'block',
	'bracket',
	'breadcrumb',
	'bulb',
	'button',
	'by',
	'center',
	'charts',
	'checkbox',
	'code',
	'command',
	'comments',
	'console',
	'cursor',
	'debug',
	'decoration',
	'description',
	'diff',
	'dropdown',
	'editor',
	'error',
	'exception',
	'expression',
	'extension',
	'filter',
	'fix',
	'ghost',
	'git',
	'group',
	'guide',
	'gutter',
	'header',
	'highlight',
	'hint',
	'hover',
	'icon',
	'indent',
	'info',
	'inlay',
	'input',
	'item',
	'keybinding',
	'label',
	'lens',
	'light',
	'line',
	'link',
	'list',
	'marker',
	'match',
	'menu',
	'menubar',
	'merge',
	'minimap',
	'navigation',
	'notebook',
	'notification',
	'notifications',
	'number',
	'option',
	'overview',
	'page',
	'pair',
	'pane',
	'panel',
	'peek',
	'picker',
	'ports',
	'preformat',
	'problems',
	'progress',
	'quick',
	'quote',
	'result',
	'ruler',
	'running',
	'sash',
	'scm',
	'scroll',
	'scrollbar',
	'search',
	'section',
	'selection',
	'separator',
	'settings',
	'side',
	'slider',
	'status',
	'sticky',
	'success',
	'suggest',
	'symbol',
	'tab',
	'table',
	'terminal',
	'testing',
	'text',
	'through',
	'title',
	'toast',
	'token',
	'tool',
	'toolbar',
	'tree',
	'unicode',
	'unnecessary',
	'validation',
	'view',
	'walk',
	'walkthrough',
	'warning',
	'welcome',
	'whitespace',
	'widget',
	'window',
] as const;
export const appSelectorComponents = [
	'action',
	'active',
	'added',
	'and',
	'ansi',
	'array',
	'back',
	'background',
	'bar',
	'black',
	'blue',
	'boolean',
	'border',
	'bottom',
	'bracket',
	'breakpoint',
	'bright',
	'cell',
	'changed',
	'checkbox',
	'class',
	'color',
	'columns',
	'comment',
	'common',
	'compact',
	'conflicting',
	'constant',
	'constructor',
	'container',
	'content',
	'continue',
	'contrast',
	'control',
	'current',
	'cursor',
	'cyan',
	'debugging',
	'decoration',
	'deemphasized',
	'default',
	'deleted',
	'description',
	'diagonal',
	'disabled',
	'disconnect',
	'drop',
	'dropdown',
	'editing',
	'editor',
	'embedded',
	'empty',
	'enumerator',
	'error',
	'errored',
	'event',
	'exception',
	'failed',
	'field',
	'file',
	'fill',
	'filter',
	'final',
	'find',
	'focus',
	'focused',
	'fold',
	'folder',
	'folding',
	'foreground',
	'frame',
	'function',
	'green',
	'guides',
	'header',
	'highlight',
	'horizontal',
	'hover',
	'icon',
	'ignored',
	'inactive',
	'incoming',
	'indent',
	'indicator',
	'info',
	'inline',
	'input',
	'inserted',
	'insertion',
	'interface',
	'into',
	'invalid',
	'item',
	'key',
	'keyword',
	'label',
	'last',
	'line',
	'lines',
	'linked',
	'list',
	'magenta',
	'match',
	'matches',
	'member',
	'method',
	'minimap',
	'modified',
	'module',
	'name',
	'namespace',
	'no',
	'null',
	'number',
	'object',
	'occurrence',
	'odd',
	'opacity',
	'operator',
	'orange',
	'out',
	'outline',
	'output',
	'over',
	'package',
	'parameter',
	'passed',
	'pause',
	'peek',
	'pinned',
	'placeholder',
	'pre',
	'process',
	'profiles',
	'prominent',
	'prompt',
	'property',
	'provider',
	'purple',
	'queued',
	'range',
	'red',
	'reference',
	'release',
	'remote',
	'removed',
	'renamed',
	'resize',
	'resolved',
	'resource',
	'restart',
	'row',
	'rows',
	'ruler',
	'run',
	'running',
	'sash',
	'secondary',
	'select',
	'selected',
	'selection',
	'separator',
	'shadow',
	'skipped',
	'snippet',
	'source',
	'sponsor',
	'stack',
	'stackframe',
	'stage',
	'star',
	'start',
	'state',
	'status',
	'step',
	'stop',
	'string',
	'stroke',
	'strong',
	'struct',
	'submodule',
	'success',
	'symbol',
	'table',
	'tabs',
	'tabstop',
	'text',
	'tile',
	'toolbar',
	'top',
	'type',
	'unfocused',
	'unit',
	'unresolved',
	'unset',
	'untracked',
	'unverified',
	'value',
	'values',
	'variable',
	'verified',
	'vertical',
	'view',
	'warning',
	'white',
	'word',
	'yellow',
] as const;
export const appSelectorComponentsByDomain = {
	'': [
		'active',
		'border',
		'contrast',
		'description',
		'disabled',
		'error',
		'focus',
		'foreground',
	],
	activityBar: [
		'active',
		'background',
		'border',
		'drop',
		'focus',
		'foreground',
		'inactive',
	],
	activityBarBadge: ['background', 'foreground'],
	activityBarItem: ['background', 'foreground', 'hover', 'profiles'],
	badge: ['background', 'foreground'],
	banner: ['background', 'foreground', 'icon'],
	breadcrumb: ['active', 'background', 'focus', 'foreground', 'selection'],
	breadcrumbPicker: ['background'],
	button: [
		'background',
		'border',
		'foreground',
		'hover',
		'secondary',
		'separator',
	],
	charts: [
		'blue',
		'foreground',
		'green',
		'lines',
		'orange',
		'purple',
		'red',
		'yellow',
	],
	checkbox: ['background', 'border', 'foreground', 'select'],
	commandCenter: ['active', 'background', 'border', 'foreground', 'inactive'],
	debugConsole: ['error', 'foreground', 'info', 'source', 'warning'],
	debugConsoleInputIcon: ['foreground'],
	debugExceptionWidget: ['background', 'border'],
	debugIcon: [
		'back',
		'breakpoint',
		'continue',
		'current',
		'disabled',
		'disconnect',
		'foreground',
		'into',
		'out',
		'over',
		'pause',
		'restart',
		'stackframe',
		'start',
		'step',
		'stop',
		'unverified',
	],
	debugTokenExpression: [
		'boolean',
		'error',
		'name',
		'number',
		'string',
		'value',
	],
	debugToolBar: ['background', 'border'],
	debugView: [
		'background',
		'changed',
		'exception',
		'foreground',
		'highlight',
		'label',
		'state',
		'value',
	],
	diffEditor: [
		'background',
		'border',
		'diagonal',
		'fill',
		'inserted',
		'line',
		'removed',
		'text',
	],
	diffEditorGutter: ['background', 'inserted', 'line', 'removed'],
	diffEditorOverview: ['foreground', 'inserted', 'removed'],
	dropdown: ['background', 'border', 'foreground', 'list'],
	editor: [
		'background',
		'border',
		'editing',
		'final',
		'find',
		'focused',
		'fold',
		'foreground',
		'frame',
		'highlight',
		'hover',
		'inactive',
		'inline',
		'line',
		'linked',
		'match',
		'range',
		'selection',
		'snippet',
		'stack',
		'strong',
		'symbol',
		'tabstop',
		'values',
		'word',
	],
	editorBracketHighlight: ['foreground'],
	editorBracketMatch: ['background', 'border'],
	editorBracketPairGuide: ['active', 'background'],
	editorCodeLens: ['foreground'],
	editorCommentsWidget: [
		'active',
		'background',
		'border',
		'range',
		'resolved',
		'unresolved',
	],
	editorCursor: ['background', 'foreground'],
	editorError: ['background', 'border', 'foreground'],
	editorGhostText: ['background', 'border', 'foreground'],
	editorGroup: [
		'background',
		'border',
		'drop',
		'empty',
		'focused',
		'foreground',
		'into',
		'prompt',
	],
	editorGroupHeader: ['background', 'border', 'no', 'tabs'],
	editorGutter: [
		'added',
		'background',
		'comment',
		'control',
		'deleted',
		'folding',
		'foreground',
		'modified',
		'range',
	],
	editorHint: ['border', 'foreground'],
	editorHoverWidget: [
		'background',
		'bar',
		'border',
		'foreground',
		'highlight',
		'status',
	],
	editorIndentGuide: ['active', 'background'],
	editorInfo: ['background', 'border', 'foreground'],
	editorInlayHint: ['background', 'foreground', 'parameter', 'type'],
	editorLightBulb: ['foreground'],
	editorLightBulbAutoFix: ['foreground'],
	editorLineNumber: ['active', 'foreground'],
	editorLink: ['active', 'foreground'],
	editorMarkerNavigation: ['background'],
	editorMarkerNavigationError: ['background', 'header'],
	editorMarkerNavigationInfo: ['background', 'header'],
	editorMarkerNavigationWarning: ['background', 'header'],
	editorOverviewRuler: [
		'added',
		'background',
		'border',
		'bracket',
		'common',
		'content',
		'current',
		'deleted',
		'error',
		'find',
		'foreground',
		'highlight',
		'incoming',
		'info',
		'match',
		'modified',
		'range',
		'selection',
		'strong',
		'warning',
		'word',
	],
	editorPane: ['background'],
	editorRuler: ['foreground'],
	editorStickyScroll: ['background'],
	editorStickyScrollHover: ['background'],
	editorSuggestWidget: [
		'background',
		'border',
		'focus',
		'foreground',
		'highlight',
		'icon',
		'selected',
	],
	editorSuggestWidgetStatus: ['foreground'],
	editorUnicodeHighlight: ['background', 'border'],
	editorUnnecessaryCode: ['border', 'opacity'],
	editorWarning: ['background', 'border', 'foreground'],
	editorWhitespace: ['foreground'],
	editorWidget: ['background', 'border', 'foreground', 'resize'],
	extensionBadge: ['background', 'foreground', 'remote'],
	extensionButton: [
		'background',
		'foreground',
		'hover',
		'prominent',
		'separator',
	],
	extensionIcon: [
		'foreground',
		'pre',
		'release',
		'sponsor',
		'star',
		'verified',
	],
	gitDecoration: [
		'added',
		'conflicting',
		'deleted',
		'foreground',
		'ignored',
		'modified',
		'renamed',
		'resource',
		'stage',
		'submodule',
		'untracked',
	],
	icon: ['foreground'],
	input: ['background', 'border', 'foreground', 'placeholder'],
	inputOption: ['active', 'background', 'border', 'foreground', 'hover'],
	inputValidation: [
		'background',
		'border',
		'error',
		'foreground',
		'info',
		'warning',
	],
	keybindingLabel: ['background', 'border', 'bottom', 'foreground'],
	keybindingTable: ['background', 'header', 'rows'],
	list: [
		'active',
		'and',
		'background',
		'border',
		'deemphasized',
		'drop',
		'error',
		'filter',
		'focus',
		'foreground',
		'highlight',
		'hover',
		'icon',
		'inactive',
		'invalid',
		'item',
		'match',
		'outline',
		'selection',
		'warning',
	],
	listFilterWidget: ['background', 'matches', 'no', 'outline', 'shadow'],
	menu: ['background', 'border', 'foreground', 'selection', 'separator'],
	menubar: ['background', 'border', 'foreground', 'selection'],
	merge: [
		'background',
		'border',
		'common',
		'content',
		'current',
		'header',
		'incoming',
	],
	mergeEditor: ['background', 'border', 'minimap', 'over', 'ruler', 'view'],
	minimap: [
		'background',
		'error',
		'find',
		'foreground',
		'highlight',
		'match',
		'occurrence',
		'opacity',
		'selection',
		'warning',
	],
	minimapGutter: ['added', 'background', 'deleted', 'modified'],
	minimapSlider: ['active', 'background', 'hover'],
	notebook: [
		'background',
		'bar',
		'border',
		'cell',
		'color',
		'container',
		'editor',
		'focused',
		'highlight',
		'hover',
		'inactive',
		'indicator',
		'insertion',
		'item',
		'output',
		'selected',
		'separator',
		'status',
		'symbol',
		'toolbar',
	],
	notebookScrollbarSlider: ['active', 'background', 'hover'],
	notebookStatusErrorIcon: ['foreground'],
	notebookStatusRunningIcon: ['foreground'],
	notebookStatusSuccessIcon: ['foreground'],
	notificationCenter: ['border'],
	notificationCenterHeader: ['background', 'foreground'],
	notificationLink: ['foreground'],
	notificationToast: ['border'],
	notifications: ['background', 'border', 'foreground'],
	notificationsErrorIcon: ['foreground'],
	notificationsInfoIcon: ['foreground'],
	notificationsWarningIcon: ['foreground'],
	panel: ['background', 'border', 'drop'],
	panelInput: ['border'],
	panelSection: ['background', 'border', 'drop'],
	panelSectionHeader: ['background', 'border', 'foreground'],
	panelTitle: ['active', 'border', 'foreground', 'inactive'],
	peekView: ['border'],
	peekViewEditor: ['background', 'border', 'highlight', 'match'],
	peekViewEditorGutter: ['background'],
	peekViewResult: [
		'background',
		'file',
		'foreground',
		'highlight',
		'line',
		'match',
		'selection',
	],
	peekViewTitle: ['background'],
	peekViewTitleDescription: ['foreground'],
	peekViewTitleLabel: ['foreground'],
	pickerGroup: ['border', 'foreground'],
	ports: ['foreground', 'icon', 'process', 'running'],
	problemsErrorIcon: ['foreground'],
	problemsInfoIcon: ['foreground'],
	problemsWarningIcon: ['foreground'],
	progressBar: ['background'],
	quickInput: ['background', 'foreground'],
	quickInputList: ['background', 'focus', 'foreground', 'icon'],
	quickInputTitle: ['background'],
	sash: ['border', 'hover'],
	scm: ['border', 'provider'],
	scrollbar: ['shadow'],
	scrollbarSlider: ['active', 'background', 'hover'],
	searchEditor: ['background', 'border', 'find', 'input', 'match', 'text'],
	selection: ['background'],
	settings: [
		'background',
		'border',
		'checkbox',
		'dropdown',
		'focused',
		'foreground',
		'header',
		'hover',
		'indicator',
		'input',
		'item',
		'list',
		'modified',
		'number',
		'row',
		'sash',
		'text',
	],
	sideBar: ['background', 'border', 'drop', 'foreground'],
	sideBarSectionHeader: ['background', 'border', 'foreground'],
	sideBarTitle: ['foreground'],
	sideBySideEditor: ['border', 'horizontal', 'vertical'],
	statusBar: [
		'background',
		'border',
		'debugging',
		'focus',
		'folder',
		'foreground',
		'no',
	],
	statusBarItem: [
		'active',
		'background',
		'border',
		'compact',
		'error',
		'focus',
		'foreground',
		'hover',
		'prominent',
		'remote',
		'warning',
	],
	symbolIcon: [
		'array',
		'boolean',
		'class',
		'color',
		'constant',
		'constructor',
		'enumerator',
		'event',
		'field',
		'file',
		'folder',
		'foreground',
		'function',
		'interface',
		'key',
		'keyword',
		'member',
		'method',
		'module',
		'namespace',
		'null',
		'number',
		'object',
		'operator',
		'package',
		'parameter',
		'property',
		'reference',
		'snippet',
		'string',
		'struct',
		'text',
		'type',
		'unit',
		'variable',
	],
	tab: [
		'active',
		'background',
		'border',
		'foreground',
		'hover',
		'inactive',
		'last',
		'modified',
		'pinned',
		'top',
		'unfocused',
	],
	terminal: [
		'active',
		'ansi',
		'background',
		'black',
		'blue',
		'border',
		'bright',
		'cyan',
		'drop',
		'find',
		'foreground',
		'green',
		'highlight',
		'inactive',
		'magenta',
		'match',
		'red',
		'selection',
		'white',
		'yellow',
	],
	terminalCommandDecoration: ['background', 'default', 'error', 'success'],
	terminalCursor: ['background', 'foreground'],
	terminalOverviewRuler: ['cursor', 'find', 'foreground', 'match'],
	testing: [
		'action',
		'background',
		'border',
		'decoration',
		'errored',
		'failed',
		'foreground',
		'header',
		'icon',
		'line',
		'passed',
		'peek',
		'queued',
		'run',
		'skipped',
		'unset',
	],
	textBlockQuote: ['background', 'border'],
	textCodeBlock: ['background'],
	textLink: ['active', 'foreground'],
	textPreformat: ['foreground'],
	textSeparator: ['foreground'],
	titleBar: ['active', 'background', 'border', 'foreground', 'inactive'],
	toolbar: ['active', 'background', 'hover', 'outline'],
	tree: [
		'background',
		'border',
		'columns',
		'guides',
		'indent',
		'odd',
		'rows',
		'stroke',
		'table',
	],
	walkThrough: ['background', 'editor', 'embedded'],
	walkthrough: ['foreground'],
	welcomePage: ['background', 'border', 'foreground', 'hover', 'tile'],
	widget: ['shadow'],
	window: ['active', 'border', 'inactive'],
} as const;
export const tokenSelectors = {
	'case-clause': {
		expr: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
	},
	cast: {
		expr: {
			ts: {},
		},
	},
	comment: {
		block: {
			documentation: {
				gml: {},
				'gml-gm81': {},
				js: {
					jsx: {},
				},
				json5: {},
				ts: {},
				tsx: {},
			},
			dtd: {},
			gml: {},
			'gml-gm81': {},
			html: {},
			js: {
				jsx: {},
			},
			json5: {},
			postcss: {},
			sugarss: {},
			svelte: {},
			ts: {},
			tsx: {},
		},
		hash: {
			rnc: {},
		},
		line: {
			'double-slash': {
				gml: {},
				'gml-gm81': {},
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			'number-sign': {
				talon: {},
				toml: {},
				yaml: {},
			},
			percentage: {
				katex: {},
			},
			postcss: {},
			shebang: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			sugarss: {},
			'triple-slash': {
				directive: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
			},
		},
		nushell: {},
		rainbow4: {},
		region: {
			block: {
				gml: {},
			},
		},
		single: {
			json5: {},
		},
		tag: {
			postcss: {},
			sugarss: {},
		},
		tags: {
			postcss: {},
			sugarss: {},
		},
	},
	constant: {
		character: {
			control: {
				regexp: {},
			},
			entity: {
				html: {},
				js: {
					jsx: {},
				},
				tsx: {},
			},
			escape: {
				backslash: {
					regexp: {},
				},
				'double-quoted': {
					newline: {
						yaml: {},
					},
				},
				js: {
					jsx: {},
				},
				json: {},
				json5: {},
				python: {},
				rnc: {},
				'single-quoted': {
					yaml: {},
				},
				talon: {},
				toml: {},
				ts: {},
				tsx: {},
				yaml: {},
			},
			format: {
				placeholder: {
					talon: {},
				},
			},
			numeric: {
				regexp: {},
			},
		},
		dec: {
			numeric: {
				json5: {},
			},
		},
		hex: {
			numeric: {
				json5: {},
			},
		},
		language: {
			'access-type': {
				jsdoc: {},
			},
			boolean: {
				false: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				toml: {},
				true: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				yaml: {},
			},
			dtd: {},
			gml: {},
			'gml-gm81': {},
			'import-export-all': {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			infinity: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			json: {},
			json5: {},
			merge: {
				yaml: {},
			},
			nan: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			null: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
				yaml: {},
			},
			'symbol-type': {
				jsdoc: {},
			},
			undefined: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			value: {
				yaml: {},
			},
		},
		name: {
			attribute: {
				tag: {},
			},
		},
		numeric: {
			bin: {
				toml: {},
			},
			binary: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			css: {
				postcss: {},
				sugarss: {},
			},
			decimal: {
				js: {
					jsx: {},
				},
				mermaid: {},
				svelte: {},
				ts: {},
				tsx: {},
			},
			float: {
				toml: {},
				yaml: {},
			},
			gml: {},
			'gml-gm81': {},
			hex: {
				gml: {},
				'gml-gm81': {},
				js: {
					jsx: {},
				},
				toml: {},
				ts: {},
				tsx: {},
			},
			'indentation-indicator': {
				yaml: {},
			},
			inf: {
				toml: {},
			},
			integer: {
				toml: {},
				yaml: {},
			},
			json: {},
			nan: {
				toml: {},
			},
			nushell: {},
			oct: {
				toml: {},
			},
			octal: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			rainbow7: {},
			real: {
				gml: {},
				'gml-gm81': {},
			},
			talon: {},
			'yaml-version': {
				yaml: {},
			},
		},
		nushell: {},
		other: {
			'character-class': {
				range: {
					regexp: {},
				},
				regexp: {},
				set: {
					regexp: {},
				},
			},
			color: {
				'rgb-value': {
					css: {
						postcss: {},
						sugarss: {},
					},
				},
			},
			description: {
				jsdoc: {},
			},
			email: {
				link: {
					underline: {
						jsdoc: {},
					},
				},
			},
			'inline-data': {
				html: {},
			},
			set: {
				regexp: {},
			},
			time: {
				date: {
					toml: {},
				},
				datetime: {
					local: {
						toml: {},
					},
					offset: {
						toml: {},
					},
				},
				time: {
					toml: {},
				},
			},
			timestamp: {
				yaml: {},
			},
		},
	},
	documentation: {
		injection: {
			js: {
				jsx: {},
			},
			ts: {},
		},
	},
	entity: {
		name: {
			class: {},
			function: {
				js: {
					jsx: {},
				},
				mermaid: {},
				nushell: {},
				rainbow3: {},
				scss: {},
				'tagged-template': {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				talon: {},
				ts: {},
				tsx: {},
			},
			label: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			selector: {},
			tag: {
				block: {
					any: {
						html: {},
					},
				},
				css: {
					postcss: {
						symbol: {},
					},
					sugarss: {
						symbol: {},
					},
				},
				directive: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				doctype: {
					html: {},
				},
				dtd: {},
				html: {},
				inline: {
					any: {
						html: {},
					},
					jsdoc: {},
				},
				js: {
					jsx: {},
				},
				namespace: {
					js: {
						jsx: {},
					},
					tsx: {},
				},
				other: {
					html: {},
				},
				script: {
					html: {},
				},
				structure: {
					any: {
						html: {},
					},
				},
				style: {
					html: {},
				},
				svelte: {},
				talon: {},
				template: {
					html: {},
				},
				tsx: {},
				xml: {
					html: {},
				},
				yaml: {},
			},
			type: {
				alias: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				anchor: {
					yaml: {},
				},
				class: {
					js: {
						jsx: {},
					},
					mermaid: {},
					ts: {},
					tsx: {},
				},
				enum: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				instance: {
					jsdoc: {},
				},
				interface: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				js: {
					jsx: {},
				},
				module: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				nushell: {},
				rainbow8: {},
				svelte: {},
				talon: {},
				ts: {},
				tsx: {},
			},
			variable: {
				field: {
					mermaid: {},
				},
				parameter: {
					mermaid: {},
				},
			},
		},
		other: {
			attribute: {
				rnc: {},
			},
			'attribute-name': {
				class: {
					css: {
						postcss: {},
						sugarss: {},
					},
					svelte: {},
				},
				directive: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				html: {
					vue: {},
				},
				hugo: {},
				id: {
					css: {
						postcss: {},
						sugarss: {},
					},
					html: {},
				},
				js: {
					jsx: {},
				},
				namespace: {
					js: {
						jsx: {},
					},
					tsx: {},
				},
				'placeholder-selector': {
					postcss: {},
					sugarss: {},
				},
				'pseudo-class': {
					css: {
						postcss: {},
						sugarss: {},
					},
				},
				svelte: {},
				tsx: {},
			},
			'attribute-selector': {
				postcss: {},
				sugarss: {},
			},
			document: {
				begin: {
					yaml: {},
				},
				end: {
					yaml: {},
				},
			},
			element: {
				rnc: {},
			},
			grammar_production: {
				rnc: {},
			},
			'inherited-class': {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
	},
	expression: {
		embbeded: {
			vue: {},
		},
		embedded: {
			vue: {},
		},
	},
	fenced_code: {
		block: {
			language: {
				attributes: {
					markdown: {},
				},
				markdown: {},
			},
		},
	},
	frontmatter: {
		markdown: {
			hugo: {},
		},
	},
	hugo: {
		shortcode: {
			name: {},
		},
	},
	inline: {
		'json-parse': {},
		'template-tagged-languages': {
			reinjection: {},
		},
	},
	invalid: {
		illegal: {
			attribute: {
				js: {
					jsx: {},
				},
				tsx: {},
			},
			'bad-ampersand': {
				html: {},
				js: {
					jsx: {},
				},
				tsx: {},
			},
			'bad-angle-bracket': {
				html: {},
			},
			'bad-semicolon': {
				css: {
					sugarss: {},
				},
			},
			character: {
				anchor: {
					yaml: {},
				},
			},
			'characters-not-allowed-here': {
				svelte: {},
			},
			escape: {
				toml: {},
			},
			'expected-array-separator': {
				json: {},
				json5: {},
			},
			'expected-comment-or-newline': {
				yaml: {},
			},
			'expected-dictionary-separator': {
				json: {},
				json5: {},
			},
			'expected-newline': {
				yaml: {},
			},
			incomplete: {
				html: {},
			},
			newline: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			syntax: {
				jsdoc: {},
			},
			'tag-handle': {
				yaml: {},
			},
			unrecognized: {
				yaml: {},
			},
			'unrecognized-string-escape': {
				json: {},
				json5: {},
			},
		},
		rainbow10: {},
	},
	keyword: {
		control: {
			anchor: {
				regexp: {},
			},
			as: {
				js: {
					jsx: {},
				},
				svelte: {},
				ts: {},
				tsx: {},
			},
			assert: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			'at-rule': {
				apply: {
					tailwind: {},
				},
				css: {
					postcss: {},
					sugarss: {},
				},
				layer: {
					tailwind: {},
				},
				responsive: {
					tailwind: {},
				},
				screen: {
					tailwind: {},
				},
				tailwind: {
					tailwind: {},
				},
				variants: {
					tailwind: {},
				},
			},
			conditional: {
				js: {
					jsx: {},
				},
				svelte: {},
				ts: {},
				tsx: {},
				vue: {},
			},
			default: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			export: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			flow: {
				alias: {
					yaml: {},
				},
				'block-scalar': {
					folded: {
						yaml: {},
					},
					literal: {
						yaml: {},
					},
				},
				js: {
					jsx: {},
				},
				svelte: {},
				ts: {},
				tsx: {},
			},
			from: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			gml: {},
			'gml-gm81': {},
			import: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			intrinsic: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			js: {
				jsx: {},
			},
			katex: {},
			loop: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
				vue: {},
			},
			mermaid: {},
			new: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			property: {
				anchor: {
					yaml: {},
				},
			},
			require: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			satisfies: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			svelte: {},
			switch: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			table: {
				cell: {
					katex: {},
				},
			},
			talon: {},
			trycatch: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			ts: {},
			tsx: {},
			type: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			with: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		declaration: {
			class: {
				component: {
					svelte: {},
				},
			},
		},
		generator: {
			asterisk: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		operator: {
			arithmetic: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			assignment: {
				compound: {
					bitwise: {
						js: {
							jsx: {},
						},
						ts: {},
						tsx: {},
					},
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				js: {
					jsx: {},
				},
				jsdoc: {},
				ts: {},
				tsx: {},
			},
			bitwise: {
				js: {
					jsx: {},
				},
				shift: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				ts: {},
				tsx: {},
			},
			character: {
				gml: {},
				'gml-gm81': {},
			},
			comparison: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			control: {
				jsdoc: {},
			},
			decrement: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			definiteassignment: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			expression: {
				awaited: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				delete: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				extends: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				import: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				in: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				infer: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				instanceof: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				is: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				keyof: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				of: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				typeof: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				void: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
			},
			increment: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			logical: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			negation: {
				regexp: {},
			},
			new: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			optional: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			or: {
				regexp: {},
			},
			postcss: {},
			quantifier: {
				regexp: {},
			},
			relational: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			rest: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			spread: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			sugarss: {},
			talon: {},
			ternary: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			type: {
				annotation: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				asserts: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				js: {
					jsx: {},
				},
				modifier: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				ts: {},
				tsx: {},
			},
			word: {
				gml: {},
				'gml-gm81': {},
			},
		},
		other: {
			a: {},
			a_sub: {},
			animation: {
				svelte: {},
			},
			attribute: {
				rnc: {},
			},
			b: {},
			b_sub: {},
			'back-reference': {
				regexp: {},
			},
			c: {},
			c_sub: {},
			d: {},
			d_sub: {},
			'data-type': {
				dtd: {},
			},
			debugger: {
				js: {
					jsx: {},
				},
				svelte: {},
				ts: {},
				tsx: {},
			},
			directive: {
				tag: {
					yaml: {},
				},
				yaml: {
					yaml: {},
				},
			},
			e: {},
			e_sub: {},
			element: {
				rnc: {},
			},
			f: {},
			f_sub: {},
			g: {},
			gml: {},
			'gml-gm81': {},
			grammar: {
				rnc: {},
			},
			h: {},
			h_sub: {},
			i: {},
			i_sub: {},
			important: {
				css: {
					postcss: {},
					sugarss: {},
				},
				hugo: {},
			},
			j: {},
			js: {
				jsx: {},
			},
			k: {},
			k_sub: {},
			l: {},
			m: {},
			m_sub: {},
			n: {},
			nushell: {},
			o: {},
			o_sub: {},
			p: {},
			p_sub: {},
			q: {},
			q_sub: {},
			r: {},
			r_sub: {},
			redirect: {},
			regex: {
				postcss: {},
				sugarss: {},
			},
			s: {},
			s_sub: {},
			start: {
				rnc: {},
			},
			svelte: {},
			t: {},
			t_sub: {},
			ts: {},
			tsx: {},
			u: {},
			u_sub: {},
			unit: {
				css: {
					postcss: {},
					sugarss: {},
				},
			},
			v: {},
			w: {},
			z: {},
		},
		rainbow2: {},
	},
	markdown: {
		math_display: {},
		math_inline: {},
		mermaid: {
			codeblock: {},
		},
		svelte: {
			codeblock: {
				script: {},
				style: {},
			},
		},
		toml: {
			codeblock: {},
			frontmatter: {
				codeblock: {},
			},
		},
		vue: {
			codeblock: {},
		},
	},
	markup: {
		bold: {
			rainbow9: {},
		},
		fenced_code: {
			block: {
				markdown: {},
			},
		},
		inserted: {
			math: {
				display: {
					markdown: {},
				},
				inline: {
					markdown: {},
				},
			},
		},
	},
	meta: {
		array: {
			literal: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			table: {
				toml: {},
			},
			toml: {},
		},
		'array-binding-pattern-variable': {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		arrow: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		assertion: {
			'look-ahead': {
				regexp: {},
			},
			'look-behind': {
				regexp: {},
			},
			'negative-look-ahead': {
				regexp: {},
			},
			'negative-look-behind': {
				regexp: {},
			},
		},
		'at-rule': {
			apply: {
				tailwind: {},
			},
			layer: {
				body: {
					tailwind: {},
				},
			},
			responsive: {
				body: {
					tailwind: {},
				},
			},
			screen: {
				body: {
					tailwind: {},
				},
			},
			tailwind: {
				css: {},
			},
			variants: {
				body: {
					tailwind: {},
				},
			},
		},
		attribute: {
			directive: {
				control: {
					vue: {},
				},
				vue: {},
			},
			generic: {
				vue: {},
			},
			style: {
				vue: {},
			},
		},
		'attribute-with-value': {
			id: {
				html: {},
			},
		},
		block: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		'block-mapping': {
			yaml: {},
		},
		brace: {
			angle: {
				ts: {},
			},
			round: {
				js: {
					jsx: {},
				},
				svelte: {},
				ts: {},
				tsx: {},
			},
			square: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		class: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		declaration: {
			attribute: {
				rnc: {},
			},
			element: {
				rnc: {},
			},
		},
		decorator: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		definition: {
			function: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			method: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			property: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			variable: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		delimiter: {
			decimal: {
				period: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
			},
		},
		directive: {
			vue: {},
			yaml: {},
		},
		embedded: {
			block: {
				svelte: {
					script: {},
					style: {},
				},
			},
			expression: {
				svelte: {},
			},
			t: {},
			ts: {},
		},
		entry: {
			toml: {},
		},
		enum: {
			declaration: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		example: {
			jsdoc: {},
		},
		export: {
			default: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		field: {
			declaration: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		'flow-mapping': {
			yaml: {},
		},
		'flow-pair': {
			explicit: {
				yaml: {},
			},
			key: {
				yaml: {},
			},
			value: {
				yaml: {},
			},
			yaml: {},
		},
		'flow-sequence': {
			yaml: {},
		},
		function: {
			expression: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			js: {
				jsx: {},
			},
			mermaid: {},
			ts: {},
			tsx: {},
		},
		'function-call': {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		grammar_production: {
			rnc: {},
		},
		group: {
			assertion: {
				regexp: {},
			},
			regexp: {},
		},
		import: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		'import-equals': {
			external: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			internal: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		indexer: {
			declaration: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			mappedtype: {
				declaration: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
			},
		},
		interface: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		method: {
			declaration: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		namespace: {
			declaration: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		object: {
			member: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			type: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		'object-binding-pattern-variable': {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		'object-literal': {
			key: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		objectliteral: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		parameter: {
			'object-binding-pattern': {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		parameters: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		paramter: {
			'array-binding-pattern': {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		preprocessor: {
			toml: {},
		},
		property: {
			yaml: {},
		},
		'property-list': {
			css: {
				postcss: {},
				sugarss: {},
			},
		},
		'property-name': {
			css: {},
		},
		return: {
			type: {
				arrow: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		scope: {
			'between-tag-pair': {
				html: {},
			},
		},
		special: {
			end: {
				svelte: {},
			},
			start: {
				svelte: {},
			},
		},
		structure: {
			array: {
				json: {},
				json5: {},
			},
			dictionary: {
				json: {},
				json5: {},
				value: {
					json: {},
					json5: {},
				},
			},
		},
		table: {
			inline: {
				toml: {},
			},
			toml: {},
		},
		tag: {
			any: {
				html: {},
			},
			attributes: {
				js: {
					jsx: {},
				},
				tsx: {},
			},
			block: {
				any: {
					html: {},
				},
			},
			custom: {
				svelte: {},
			},
			end: {
				svelte: {},
			},
			inline: {
				any: {
					html: {},
				},
			},
			js: {
				jsx: {},
			},
			other: {
				html: {},
			},
			preprocessor: {
				xml: {
					html: {},
				},
			},
			sgml: {
				doctype: {
					html: {},
				},
				html: {},
			},
			start: {
				svelte: {},
			},
			structure: {
				any: {
					html: {},
				},
			},
			svelte: {},
			ts: {},
			tsx: {},
			type: {
				dtd: {},
			},
			void: {
				svelte: {},
			},
			'without-attributes': {
				js: {
					jsx: {},
				},
				tsx: {},
			},
		},
		'tag-stuff': {},
		template: {
			expression: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		'template-tag': {
			end: {},
			start: {},
		},
		'toc-list': {
			id: {
				html: {},
			},
		},
		type: {
			annotation: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			declaration: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			function: {
				js: {
					jsx: {},
				},
				return: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				ts: {},
				tsx: {},
			},
			infer: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			parameters: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
				vue: {},
			},
			paren: {
				cover: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
			},
			tuple: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		var: {
			expr: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		'var-single-variable': {
			expr: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
	},
	new: {
		expr: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
	},
	punctuation: {
		accessor: {
			js: {
				jsx: {},
			},
			optional: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			ts: {},
			tsx: {},
		},
		'attribute-shorthand': {
			bind: {
				html: {
					vue: {},
				},
			},
			event: {
				html: {
					vue: {},
				},
			},
			slot: {
				html: {
					vue: {},
				},
			},
		},
		brackets: {
			angle: {
				nushell: {},
			},
			curly: {
				nushell: {},
			},
			round: {
				nushell: {},
			},
			square: {
				nushell: {},
			},
		},
		comma: {
			nushell: {},
		},
		decorator: {
			internaldeclaration: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		definition: {
			alias: {
				yaml: {},
			},
			anchor: {
				yaml: {},
			},
			array: {
				begin: {
					json: {},
					json5: {},
				},
				end: {
					json: {},
					json5: {},
				},
				table: {
					toml: {},
				},
				toml: {},
			},
			'binding-pattern': {
				array: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				object: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
			},
			block: {
				begin: {
					svelte: {},
				},
				end: {
					svelte: {},
				},
				js: {
					jsx: {},
				},
				sequence: {
					item: {
						yaml: {},
					},
				},
				tag: {
					jsdoc: {},
				},
				ts: {},
				tsx: {},
			},
			bracket: {
				angle: {
					begin: {
						jsdoc: {},
					},
					end: {
						jsdoc: {},
					},
				},
				curly: {
					begin: {
						jsdoc: {},
					},
					end: {
						jsdoc: {},
					},
				},
				square: {
					begin: {
						jsdoc: {},
					},
					end: {
						jsdoc: {},
					},
				},
			},
			'character-class': {
				regexp: {},
			},
			comment: {
				html: {},
				js: {
					jsx: {},
				},
				json5: {},
				katex: {},
				svelte: {},
				toml: {},
				ts: {},
				tsx: {},
				yaml: {},
			},
			dictionary: {
				begin: {
					json: {},
					json5: {},
				},
				end: {
					json: {},
					json5: {},
				},
			},
			directive: {
				begin: {
					yaml: {},
				},
			},
			entity: {
				html: {},
				js: {
					jsx: {},
				},
				tsx: {},
			},
			function: {
				katex: {},
				latex: {},
			},
			generic: {
				begin: {
					html: {},
				},
				end: {
					html: {},
				},
			},
			group: {
				assertion: {
					regexp: {},
				},
				'no-capture': {
					regexp: {},
				},
				regexp: {},
			},
			inline: {
				tag: {
					jsdoc: {},
				},
			},
			interpolation: {
				begin: {
					html: {
						vue: {},
					},
				},
				end: {
					html: {
						vue: {},
					},
				},
			},
			'key-value': {
				begin: {
					yaml: {},
				},
			},
			keyword: {
				css: {},
				svelte: {},
			},
			mapping: {
				begin: {
					yaml: {},
				},
				end: {
					yaml: {},
				},
			},
			markdown: {},
			math: {
				display: {
					markdown: {},
				},
				inline: {
					markdown: {},
				},
			},
			meta: {
				preprocessor: {
					toml: {},
				},
			},
			'optional-value': {
				begin: {
					bracket: {
						square: {
							jsdoc: {},
						},
					},
				},
				end: {
					bracket: {
						square: {
							jsdoc: {},
						},
					},
				},
			},
			parameters: {
				begin: {
					js: {
						jsx: {},
					},
					katex: {},
					talon: {},
					ts: {},
					tsx: {},
				},
				end: {
					js: {
						jsx: {},
					},
					katex: {},
					talon: {},
					ts: {},
					tsx: {},
				},
				key: {
					talon: {},
				},
			},
			section: {
				'case-statement': {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
			},
			sequence: {
				begin: {
					yaml: {},
				},
				end: {
					yaml: {},
				},
			},
			string: {
				begin: {
					html: {
						vue: {},
					},
					hugo: {},
					js: {
						jsx: {},
					},
					jsdoc: {},
					json: {},
					json5: {},
					svelte: {},
					talon: {},
					ts: {},
					tsx: {},
					yaml: {},
				},
				end: {
					html: {
						vue: {},
					},
					hugo: {},
					js: {
						jsx: {},
					},
					jsdoc: {},
					json: {},
					json5: {},
					svelte: {},
					talon: {},
					ts: {},
					tsx: {},
					yaml: {},
				},
				template: {
					begin: {
						js: {
							jsx: {},
						},
						ts: {},
						tsx: {},
					},
					end: {
						js: {
							jsx: {},
						},
						ts: {},
						tsx: {},
					},
				},
			},
			table: {
				inline: {
					toml: {},
				},
				toml: {},
			},
			tag: {
				begin: {
					html: {
						vue: {},
					},
					hugo: {},
					js: {
						jsx: {},
					},
					svelte: {},
					tsx: {},
				},
				directive: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				dtd: {},
				end: {
					html: {
						vue: {},
					},
					hugo: {},
					js: {
						jsx: {},
					},
					svelte: {},
					tsx: {},
				},
				html: {},
			},
			'template-expression': {
				begin: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				end: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
			},
			typeparameters: {
				begin: {
					js: {
						jsx: {},
					},
					mermaid: {},
					ts: {},
					tsx: {},
				},
				end: {
					js: {
						jsx: {},
					},
					mermaid: {},
					ts: {},
					tsx: {},
				},
			},
			variable: {
				svelte: {},
			},
		},
		destructuring: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		eq: {
			toml: {},
		},
		parenthesis: {
			closed: {
				mermaid: {},
			},
			open: {
				mermaid: {},
			},
		},
		section: {
			embedded: {
				begin: {
					js: {
						jsx: {},
					},
					svelte: {},
					tsx: {},
				},
				end: {
					js: {
						jsx: {},
					},
					svelte: {},
					tsx: {},
				},
			},
			function: {
				begin: {
					bracket: {
						round: {
							css: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							css: {},
						},
					},
				},
			},
			interpolation: {
				begin: {},
				end: {},
			},
			layer: {
				begin: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
			},
			responsive: {
				begin: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
			},
			screen: {
				begin: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
			},
			variants: {
				begin: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
			},
		},
		semi: {
			nushell: {},
		},
		separator: {
			array: {
				json: {},
				json5: {},
				toml: {},
			},
			comma: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			dictionary: {
				'key-value': {
					json: {},
					json5: {},
				},
				pair: {
					json: {},
					json5: {},
				},
			},
			dot: {
				toml: {},
			},
			'key-value': {
				css: {},
				html: {
					vue: {},
				},
				js: {
					jsx: {},
				},
				mapping: {
					yaml: {},
				},
				svelte: {},
				ts: {},
				tsx: {},
			},
			label: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			mapping: {
				yaml: {},
			},
			namespace: {
				js: {
					jsx: {},
				},
				tsx: {},
			},
			parameter: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			pipe: {
				jsdoc: {},
			},
			sequence: {
				yaml: {},
			},
			svelte: {},
			table: {
				inline: {
					toml: {},
				},
			},
			talon: {},
		},
		support: {
			type: {
				'property-name': {
					begin: {
						json: {},
					},
					end: {
						json: {},
					},
				},
			},
		},
		terminator: {
			apply: {
				tailwind: {},
			},
			rule: {
				css: {},
			},
			statement: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			tailwind: {
				tailwind: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
					yaml: {},
				},
			},
		},
	},
	quoted: {
		single: {
			close: {
				'gml-gm81': {},
			},
			open: {
				'gml-gm81': {},
			},
		},
	},
	rainbow1: {},
	rainbowgroup: {},
	'self-closing-tag': {},
	source: {
		asl: {
			yaml: {},
		},
		css: {
			embedded: {
				html: {
					vue: {},
				},
			},
			less: {},
			postcss: {},
			scss: {},
			sugarss: {},
			tailwind: {},
		},
		directive: {
			vue: {},
		},
		embedded: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		env: {},
		'gml-extra': {
			gml: {},
		},
		'gml-gm81': {},
		'gml-gm81-extra': {
			'gml-gm81': {},
		},
		'gml-gm81-thirdparty': {
			'gml-gm81': {},
		},
		'gml-gms': {
			gmxwithgml: {},
		},
		'gml-gms2': {},
		'gml-thirdparty': {
			gml: {},
		},
		graphql: {},
		js: {
			jsx: {},
		},
		json: {
			comments: {},
			yyp: {},
		},
		json5: {},
		lua: {
			gml: {},
		},
		mermaid: {},
		ndjson: {},
		nushell: {},
		'pip-requirements': {},
		postcss: {},
		ra_syntax_tree: {},
		rnc: {},
		sass: {},
		ssmjson: {},
		ssmyaml: {},
		stylus: {},
		svelte: {},
		talon: {},
		toml: {},
		ts: {
			embedded: {
				html: {
					vue: {},
				},
			},
		},
		tsx: {},
		vue: {},
		xquery: {},
		yaml: {},
		yyp: {},
	},
	storage: {
		modifier: {
			async: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			'chomping-indicator': {
				yaml: {},
			},
			js: {
				jsx: {},
			},
			nushell: {},
			ts: {},
			tsx: {},
		},
		type: {
			class: {
				component: {
					svelte: {},
				},
				js: {
					jsx: {},
				},
				jsdoc: {},
				ts: {},
				tsx: {},
			},
			enum: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			function: {
				arrow: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			gml: {},
			'gml-gm81': {},
			interface: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			internaldeclaration: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			js: {
				jsx: {},
			},
			mermaid: {},
			namespace: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			numeric: {
				bigint: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
			},
			nushell: {},
			property: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			rnc: {},
			svelte: {},
			'tag-handle': {
				yaml: {},
			},
			ts: {},
			tsx: {},
			type: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
	},
	string: {
		interpolated: {
			nushell: {},
			talon: {},
		},
		js: {},
		json: {},
		key: {
			json5: {},
		},
		path: {},
		quoted: {
			double: {
				css: {
					postcss: {},
					sugarss: {},
				},
				dtd: {},
				gml: {},
				'gml-gm81': {},
				html: {},
				hugo: {},
				js: {
					jsx: {},
				},
				json: {},
				nushell: {},
				rnc: {},
				talon: {},
				ts: {},
				tsx: {},
				yaml: {},
			},
			json5: {},
			single: {
				basic: {
					line: {
						toml: {},
					},
				},
				css: {
					postcss: {},
					sugarss: {},
				},
				gml: {},
				'gml-gm81': {},
				html: {},
				js: {
					jsx: {},
				},
				literal: {
					line: {
						toml: {},
					},
				},
				rnc: {},
				ts: {},
				tsx: {},
				yaml: {},
			},
			svelte: {},
			triple: {
				basic: {
					block: {
						toml: {},
					},
				},
				literal: {
					block: {
						toml: {},
					},
				},
			},
		},
		rainbow5: {},
		regexp: {
			js: {
				jsx: {},
			},
			talon: {},
			ts: {},
			tsx: {},
		},
		template: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
		unquoted: {
			block: {
				yaml: {},
			},
			'directive-name': {
				yaml: {},
			},
			'directive-parameter': {
				yaml: {},
			},
			html: {},
			hugo: {},
			plain: {
				in: {
					yaml: {},
				},
				out: {
					yaml: {},
				},
			},
			svelte: {},
		},
	},
	support: {
		class: {
			builtin: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			component: {
				html: {},
				js: {
					jsx: {},
				},
				svelte: {},
				tsx: {},
			},
			error: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			js: {
				jsx: {},
			},
			promise: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			ts: {},
			tsx: {},
		},
		constant: {
			js: {
				jsx: {},
			},
			json: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			math: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			property: {
				math: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
			},
			'property-value': {
				css: {
					postcss: {},
					sugarss: {},
				},
			},
			ts: {},
			tsx: {},
		},
		function: {
			achievement: {
				gml: {},
			},
			ads: {
				gml: {},
			},
			alarm: {
				gml: {},
			},
			analytics: {
				event: {
					gml: {},
				},
			},
			application: {
				gml: {},
			},
			array: {
				gml: {},
			},
			asset: {
				get: {
					gml: {},
				},
			},
			audio: {
				gml: {},
			},
			buffer: {
				gml: {},
			},
			camera: {
				gml: {},
			},
			clickable: {
				gml: {},
			},
			clipboard: {
				text: {
					gml: {},
				},
			},
			cloud: {
				gml: {},
			},
			collision: {
				gml: {},
			},
			color: {
				gml: {},
			},
			config: {
				tailwind: {},
			},
			date: {
				gml: {},
			},
			device: {
				gml: {},
			},
			display: {
				gml: {},
			},
			dot: {
				gml: {},
			},
			draw: {
				advance: {
					gml: {},
				},
				gml: {},
				light: {
					gml: {},
				},
				skeleton: {
					gml: {},
				},
				tile: {
					gml: {},
				},
			},
			ds: {
				gml: {},
			},
			effect: {
				gml: {},
			},
			encode: {
				gml: {},
			},
			event: {
				gml: {},
			},
			external: {
				gml: {},
			},
			facebook: {
				gml: {},
			},
			file: {
				gml: {},
			},
			font: {
				gml: {},
			},
			game: {
				gml: {},
			},
			gamepad: {
				gml: {},
			},
			get: {
				gml: {},
			},
			gml: {
				gml: {},
			},
			'gml-gm81': {},
			gpu: {
				gml: {},
			},
			highscore: {
				gml: {},
			},
			http: {
				gml: {},
			},
			iap: {
				gml: {},
			},
			ini: {
				gml: {},
			},
			instance: {
				gml: {},
			},
			interpolation: {
				postcss: {},
				sugarss: {},
			},
			is: {
				gml: {},
			},
			js: {
				jsx: {},
			},
			json: {
				gml: {},
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			katex: {},
			keyboard: {
				gml: {},
			},
			layer: {
				gml: {},
				instance: {
					gml: {},
				},
				tile: {
					gml: {},
				},
			},
			math: {
				epsilon: {
					gml: {},
				},
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			matrix: {
				gml: {},
			},
			motion: {
				gml: {},
			},
			mouse: {
				gml: {},
			},
			name: {
				postcss: {
					library: {},
					'no-completions': {},
				},
				sugarss: {
					library: {},
					'no-completions': {},
				},
			},
			network: {
				gml: {},
			},
			object: {
				gml: {},
			},
			'object-event': {
				'gml-gm81': {},
			},
			os: {
				gml: {},
			},
			others: {
				gml: {},
			},
			parameter: {
				gml: {},
			},
			part: {
				gml: {},
			},
			path: {
				gml: {},
			},
			physics: {
				gml: {},
			},
			point: {
				gml: {},
				in: {
					gml: {},
				},
			},
			push: {
				notification: {
					gml: {},
				},
			},
			random: {
				gml: {},
			},
			rectangle: {
				in: {
					gml: {},
				},
			},
			room: {
				gml: {},
			},
			screen: {
				save: {
					gml: {},
				},
				tailwind: {},
			},
			script: {
				gml: {},
			},
			shader: {
				gml: {},
			},
			show: {
				gml: {},
			},
			skeleton: {
				gml: {},
			},
			sprite: {
				gml: {},
			},
			steam: {
				gml: {},
				ugc: {
					gml: {},
				},
			},
			string: {
				gml: {},
			},
			surface: {
				gml: {},
			},
			svelte: {},
			texture: {
				gml: {},
			},
			theme: {
				tailwind: {},
			},
			tile: {
				gml: {},
			},
			tilemap: {
				gml: {},
			},
			timeline: {
				gml: {},
			},
			ts: {},
			tsx: {},
			url: {
				gml: {},
			},
			uvs: {
				texture: {
					gml: {},
				},
			},
			variable: {
				gml: {},
			},
			vertex: {
				gml: {},
			},
			view: {
				gml: {},
			},
			virtual: {
				key: {
					gml: {},
				},
			},
			window: {
				gml: {},
			},
			winphone: {
				gml: {},
			},
			word: {
				gml: {},
			},
		},
		other: {
			directive: {
				reserved: {
					yaml: {},
				},
			},
			match: {
				any: {
					regexp: {},
				},
				begin: {
					regexp: {},
				},
				end: {
					regexp: {},
				},
			},
		},
		type: {
			builtin: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			object: {
				module: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
			},
			primitive: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			'property-name': {
				array: {
					toml: {},
				},
				css: {
					postcss: {},
					sugarss: {},
				},
				json: {},
				svelte: {},
				table: {
					toml: {},
				},
				toml: {},
			},
			'tag-prefix': {
				yaml: {},
			},
		},
		variable: {
			global: {
				gml: {},
				'gml-gm81': {},
			},
			local: {
				gml: {},
				'gml-gm81': {},
			},
			property: {
				importmeta: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				js: {
					jsx: {},
				},
				target: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
	},
	svelte: {
		pug: {
			dotblock: {},
			tags: {},
		},
	},
	'switch-block': {
		expr: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
	},
	'switch-expression': {
		expr: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
	},
	'switch-statement': {
		expr: {
			js: {
				jsx: {},
			},
			ts: {},
			tsx: {},
		},
	},
	tailwindcss: {
		'at-apply': {
			injection: {},
		},
		'at-rules': {
			injection: {},
			postcss: {
				injection: {},
			},
			scss: {
				injection: {},
			},
		},
		'screen-fn': {
			injection: {},
		},
		'theme-fn': {
			injection: {},
		},
	},
	text: {
		csv: {},
		dynamiccsv: {},
		gmx: {},
		gmxwithgml: {},
		html: {
			derivative: {},
			handlebars: {},
			markdown: {
				source: {
					gfm: {
						apib: {},
						mson: {},
					},
				},
			},
			'vue-html': {},
		},
		katex: {},
		psv: {},
		pug: {},
		rbhover: {},
		scsv: {},
		svelte: {},
		tsv: {},
		wspcsv: {},
		xml: {
			dtd: {},
			gmx: {},
			gmxwithgml: {},
		},
	},
	varable: {
		language: {
			gml: {},
			'gml-gm81': {},
		},
	},
	variable: {
		css: {},
		function: {
			svelte: {},
		},
		language: {
			arguments: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			dtd: {},
			nushell: {},
			super: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			svelte: {},
			this: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		name: {
			nushell: {},
		},
		nushell: {},
		object: {
			property: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
		},
		other: {
			alias: {
				yaml: {},
			},
			constant: {
				js: {
					jsx: {},
				},
				object: {
					js: {
						jsx: {},
					},
					property: {
						js: {
							jsx: {},
						},
						ts: {},
						tsx: {},
					},
					ts: {},
					tsx: {},
				},
				property: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				svelte: {},
				ts: {},
				tsx: {},
			},
			description: {
				jsdoc: {},
			},
			enummember: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			gml: {},
			'gml-gm81': {},
			jsdoc: {},
			less: {
				gml: {},
			},
			link: {
				underline: {
					jsdoc: {},
				},
			},
			object: {
				js: {
					jsx: {},
				},
				property: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				ts: {},
				tsx: {},
			},
			property: {
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			readwrite: {
				alias: {
					js: {
						jsx: {},
					},
					ts: {},
					tsx: {},
				},
				js: {
					jsx: {},
				},
				ts: {},
				tsx: {},
			},
			regexp: {},
			talon: {},
		},
		parameter: {
			function: {
				katex: {},
				nushell: {},
			},
			gml: {},
			'gml-gm81': {},
			js: {
				jsx: {},
			},
			katex: {},
			layer: {
				tailwind: {},
			},
			postcss: {},
			rainbow6: {},
			screen: {
				tailwind: {},
			},
			sugarss: {},
			svelte: {},
			tailwind: {
				tailwind: {},
			},
			talon: {},
			ts: {},
			tsx: {},
			variants: {
				tailwind: {},
			},
		},
	},
	vue: {
		directives: {},
		interpolations: {},
		pug: {
			directives: {},
			interpolations: {},
		},
		sfc: {
			style: {
				variable: {
					injection: {
						'v-bind': {},
					},
				},
			},
		},
	},
} as const;
