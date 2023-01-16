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