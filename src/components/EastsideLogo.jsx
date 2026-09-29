function EastsideLogo({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 150"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EASTSIDE mascot"
      role="img"
    >

      {/* Handle */}
      <rect
        x="47"
        y="8"
        width="26"
        height="7"
        rx="2"
        fill="currentColor"
      />

      <rect
        x="51"
        y="14"
        width="6"
        height="18"
        fill="currentColor"
      />

      <rect
        x="63"
        y="14"
        width="6"
        height="18"
        fill="currentColor"
      />


      {/* Left shoulder and arm */}
      <path
        d="
          M32 39
          C25 40 20 45 17 52
          C14 59 14 66 16 71
          C17 74 20 75 22 73
          C25 71 25 67 26 63
          C27 58 30 54 35 51
          L39 44
          Z
        "
        fill="currentColor"
      />

      {/* Left forearm */}
      <path
        d="
          M19 67
          C15 73 14 81 16 88
          C17 94 20 99 24 100
          C27 100 29 98 29 95
          C29 92 26 88 25 84
          C24 79 27 74 30 69
          Z
        "
        fill="currentColor"
      />

      {/* Left hand */}
      <path
        d="
          M22 94
          C18 94 15 98 16 102
          C16 106 19 108 22 108
          C26 108 28 105 28 101
          C28 98 26 95 22 94
          Z
        "
        fill="currentColor"
      />


      {/* Right shoulder and arm */}
      <path
        d="
          M88 39
          C95 40 100 45 103 52
          C106 59 106 66 104 71
          C103 74 100 75 98 73
          C95 71 95 67 94 63
          C93 58 90 54 85 51
          L81 44
          Z
        "
        fill="currentColor"
      />

      {/* Right forearm */}
      <path
        d="
          M101 67
          C105 73 106 81 104 88
          C103 94 100 99 96 100
          C93 100 91 98 91 95
          C91 92 94 88 95 84
          C96 79 93 74 90 69
          Z
        "
        fill="currentColor"
      />

      {/* Right hand */}
      <path
        d="
          M98 94
          C102 94 105 98 104 102
          C104 106 101 108 98 108
          C94 108 92 105 92 101
          C92 98 94 95 98 94
          Z
        "
        fill="currentColor"
      />


      {/* Suitcase */}
      <rect
        x="31"
        y="30"
        width="58"
        height="70"
        rx="7"
        fill="currentColor"
      />


      {/* Suitcase ridges */}
      <g fill="#ffffff">
        <rect x="38" y="36" width="4" height="57" rx="2" />
        <rect x="47" y="36" width="4" height="57" rx="2" />
        <rect x="56" y="36" width="4" height="57" rx="2" />
        <rect x="65" y="36" width="4" height="57" rx="2" />
        <rect x="74" y="36" width="4" height="57" rx="2" />
        <rect x="83" y="36" width="2" height="57" rx="1" />
      </g>


      {/* Left leg */}
      <path
        d="
          M43 96
          C42 105 39 115 38 124
          C37 132 38 139 42 143
          C45 146 49 144 51 140
          C52 136 49 131 50 125
          L54 99
          Z
        "
        fill="currentColor"
      />

      {/* Right leg */}
      <path
        d="
          M65 96
          C66 105 69 115 70 124
          C71 132 70 139 66 143
          C63 146 59 144 57 140
          C56 136 59 131 58 125
          L54 99
          Z
        "
        fill="currentColor"
      />


      {/* Left foot */}
      <path
        d="
          M42 138
          C38 141 36 146 38 149
          C41 151 48 151 52 148
          C54 146 52 143 49 142
          Z
        "
        fill="currentColor"
      />

      {/* Right foot */}
      <path
        d="
          M66 138
          C70 141 72 146 70 149
          C67 151 60 151 56 148
          C54 146 56 143 59 142
          Z
        "
        fill="currentColor"
      />

    </svg>
  );
}

export default EastsideLogo;