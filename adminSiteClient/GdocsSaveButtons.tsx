import { Badge, Button, Space } from "antd"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index.js"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle"
import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt"

export const GdocsSaveButtons = ({
    published,
    hasErrors,
    hasWarnings,
    hasChanges,
    isLightningUpdate,
    onPublish,
}: {
    published: boolean
    hasErrors: boolean
    hasWarnings: boolean
    hasChanges: boolean
    isLightningUpdate: boolean
    onPublish: VoidFunction
}) => {
    const badgeProps =
        hasWarnings && !hasErrors
            ? {
                  count: (
                      <FontAwesomeIcon
                          icon={faExclamationTriangle}
                          className="warning"
                      />
                  ),
              }
            : {}
    return (
        <Space>
            <Badge {...badgeProps}>
                {/* #gdocsvalidationclient: prevent saving published articles with errors */}
                <Button
                    disabled={hasErrors || (published && !hasChanges)}
                    type="primary"
                    onClick={onPublish}
                >
                    {!published ? (
                        "Publish"
                    ) : isLightningUpdate ? (
                        <>
                            <FontAwesomeIcon icon={faBolt} /> Republish
                        </>
                    ) : (
                        "Republish"
                    )}
                </Button>
            </Badge>
        </Space>
    )
}
